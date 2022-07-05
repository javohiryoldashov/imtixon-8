import React from 'react';
import './Comp_companent.css'
import { useState, useEffect, useRef } from 'react'

const CompCompanent = () => {
    const [company, setCompany] = useState([])

    useEffect(() => {
        fetch(`https://credojavokhirs.herokuapp.com/company`)
        .then(res => res.json())
        .then(data => {
            setCompany(data)
        })}, [])

        
        const inpRef = useRef()
        const hendelPostComp = (e) =>{
            let x = document.forms["myForm"]["company_name"].value;
                if (x == "") {
                    alert("Berilgan malumotlar toliq emas iltimos qayta to'ldiring !");
                    return false;
            }
            e.preventDefault()
            fetch(`https://credojavokhirs.herokuapp.com/company`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    company_name: inpRef.current.value
                })
            })
            .then(res => res.json())
            .then(data => {
                setCompany(data)
            })
        }
        const hendelDelete = (id)=>{
            fetch(`https://credojavokhirs.herokuapp.com/company/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                  },
            }).then(res => res.json())
            .catch(err => console.log(err)) 
        }
    return (
        <div className='CompCompanent'>
            <form onSubmit={hendelPostComp} name='myForm' className='form'>
                <label htmlFor="input"> Company name </label>
                <input ref={inpRef} id='input' className='form_input' type="text" name='company_name' />
                <button type='submit'  className='form_btn'>Send</button>
            </form>

            <div className='Companies'>

                    {
                        company?.map((e,i)=>{
                            return <div key={i} className='Companies_child'>
                                        <button onClick={()=>hendelDelete(e.company_id)} id={i} data-set-id={e.company_id} className='delete_btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                            </svg>
                                        </button>
                                        <img src={e.company_img} alt="" />
                                        <p>{e.company_name}</p>
                                    </div>
                        })
                    }
                </div>
        </div>
    );
}

export default CompCompanent;
