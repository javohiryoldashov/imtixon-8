import React from 'react';
import { useState, useEffect } from 'react'
import './comp_banks.css'
const CompBanks = () => {
    const [banks, setBanks] = useState([])
    
    useEffect(() => {
        fetch(`https://credojavokhirs.herokuapp.com/banks`)
        .then(res => res.json())
        .then(data => {
            setBanks(data)
        })}, [])
        
        var input1 = document.getElementById('input1')
        var input2 = document.getElementById('input2')
        var input3 = document.getElementById('input3')
        var input4 = document.getElementById('input4')
        var input5 = document.getElementById('input5')
        
        const hendelPostBank = (e) =>{
            e.preventDefault()
            let x = document.forms["myForm"]["bank_name"].value;
            let i = document.forms["myForm"]["bank_many"].value;
            let y = document.forms["myForm"]["bank_durection"].value;
            let z = document.forms["myForm"]["bank_start_payment"].value;
            let c = document.forms["myForm"]["bank_service"].value;
            if (x,i,y,z,c == "") {
                alert("Berilgan malumotlar toliq emas iltimos qayta to'ldiring !");
              return false;
            }
            fetch(`https://credojavokhirs.herokuapp.com/banks`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    bank_name: input1.value,
                    bank_many: input2.value,
                    bank_durection: input3.value,
                    bank_start_payment: input4.value,
                    bank_service: input5.value
                })
            })
            .then(res => res.json())
            .then(data => {
                setBanks(data)
            })
        }
        const hendelDelete = id=>{
            fetch(`https://credojavokhirs.herokuapp.com/banks/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res => res.json())
            .catch(err => console.log(err)) 
        }   
        
        
        return (
            
            <div className='CompBanks'>
            <form name='myForm' onSubmit={hendelPostBank} className='form'>
                <label htmlFor="input1"> Bank name </label>
                    <input id='input1' className='form_input' type="text" name='bank_name' />
                <label htmlFor="input2"> Bank have maney</label>
                    <input id='input2' className='form_input' type="number" name='bank_many' />
                <label htmlFor="input3">Bank Durection </label>
                    <input id='input3' className='form_input' type="number" name='bank_durection' />
                <label htmlFor="input4"> Bank start payment id</label>
                    <input id='input4' className='form_input' type="number" name='bank_start_payment' />
                <label htmlFor="input5"> Bank service</label>
                    <input id='input5' className='form_input' type="number" name='bank_service' />
                <button type='submit'  className='form_btn'>Send</button>
            </form>

            <div className='banks_items'>
                <div className='banks_One'>
                { 
                    banks?.map((e,i)=>{ 
                        return <div key={i} className='banks_child'>
                                    <button onClick={()=>hendelDelete(e.bank_id)}className='delete_btn'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                        </svg>
                                    </button>
                                    <h2>{e.bank_name}</h2>
                                    <p>Bank have maney {e.bank_many} so'm</p>
                                    <p>Necha yilga berilishi: {e.bank_durection}</p>
                                    <p>Boshlangich to'lov foizi: {e.bank_start_payment}</p>
                                    <p> Bank servise: {e.bank_service}</p>
                                </div>
                    })
                } 
                </div>
            </div>
        </div>
    );
}


export default CompBanks;
