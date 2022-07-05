import React from 'react';
import { useState, useEffect, useRef } from 'react'
import './Comp_branch.css'
const CompBranch = () => {
    const [branches, setBranches] = useState([])

   
    useEffect(() => {
        fetch(`http://localhost:9000/branches`)
        .then(res => res.json())
        .then(data => {
            setBranches(data)
        })}, [])

        
        const inpRef1 = useRef()
        const inpRef2 = useRef()
        const inpRef3 = useRef()
        const hendelPostComp = (e) =>{
            let x = document.forms["myForm"]["branch_name"].value;
            let i = document.forms["myForm"]["branch_addres"].value;
            let y = document.forms["myForm"]["company_id"].value;
                if (x,i,y == "") {
                    alert("Berilgan malumotlar toliq emas iltimos qayta to'ldiring !");
                    return false;
            }
            
            e.preventDefault()
            fetch(`http://localhost:9000/branches`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    branch_name: inpRef1.current.value,
                    branch_addres: inpRef2.current.value,
                    company_id: inpRef3.current.value
                })
            })
            .then(res => res.json())
            .then(data => {
                setBranches(data)
            })
        }
        const hendelDelete = id=>{
            fetch(`http://localhost:9000/branches/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                  },
            }).then(res => res.json())
            .catch(err => console.log(err)) 
        }
    return (
        <div className='CompBranch'>
            <form onSubmit={hendelPostComp} name='myForm' className='form'>
                <label htmlFor="input"> Branch name </label>
                <input id='input' className='form_input' ref={inpRef1} type="text" name='branch_name' />
                <label htmlFor="input2"> Branch address </label>
                <input id='input2' className='form_input' ref={inpRef2} type="text" name='branch_addres' />
                <label htmlFor="input3"> Company id</label>
                <input id='input3' className='form_input' ref={inpRef3} type="number" name='company_id' />
                <button type='submit'  className='form_btn'>Send</button>
            </form>

            <div className='branches_items'>
                <div className='branches_One'>
                { 
                    branches?.map((e,i)=>{ 
                            return <div key={i} className='branches_child'>
                                    <button onClick={()=>hendelDelete(e.branch_id)}className='delete_btn'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                        </svg>
                                    </button>
                                    <h2>{e.branch_name}</h2>
                                    <p>{e.branch_addres}</p>
                                    <p>Nechanchi Companyga tegishliligi :{e.company_id}</p>
                                </div>
                    })
                } 
                </div>
            </div>
    </div>
    );
}

export default CompBranch;
