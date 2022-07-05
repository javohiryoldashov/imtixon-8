import React from 'react';
import { useState, useEffect } from 'react'
import  './comp_rooms.css'
const CompRooms = () => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9000/rooms`)
        .then(res => res.json())
        .then(data => {
            setRooms(data)
        })}, [])

        var input1 = document.getElementById('input1')
        var input2 = document.getElementById('input2')
        var input3 = document.getElementById('input3')
        var input4 = document.getElementById('input4')
        
        const hendelPostComp = (e) =>{
            let x = document.forms["myForm"]["room_name"].value;
            let i = document.forms["myForm"]["room_ametr_price"].value;
            let y = document.forms["myForm"]["room_meter"].value;
            let a = document.forms["myForm"]["branches_id"].value;
                if (x,i,y,a == "") {
                    alert("Berilgan malumotlar toliq emas iltimos qayta to'ldiring !");
                    return false;
            }
            e.preventDefault()
            fetch(`http://localhost:9000/rooms`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    room_name: input1.value,
                    room_ametr_price: input2.value,
                    room_meter: input3.value,
                    branches_id: input4.value
                })
            })
            .then(res => res.json())
            .then(data => {
                setRooms(data)
            })
        }
        const hendelDelete = id=>{
            fetch(`http://localhost:9000/rooms/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                  },
            }).then(res => res.json())
            .catch(err => console.log(err)) 
        }
    return (
        <div className='CompRooms'>
            <form onSubmit={hendelPostComp} name='myForm' className='form'>
                <label htmlFor="input"> Rooms Count </label>
                <input id='input1' className='form_input' type="number" name='room_name' />
                <label htmlFor="input2"> Rooms a meter square price</label>
                <input id='input2' className='form_input' type="number" name='room_ametr_price' />
                <label htmlFor="input3"> Rooms meter squer</label>
                <input id='input3' className='form_input' type="number" name='room_meter' />
                <label htmlFor="input3"> Branches id</label>
                <input id='input4' className='form_input' type="number" name='branches_id' />
                <button type='submit'  className='form_btn'>Send</button>
            </form>

            <div className='rooms_items'>
                <div className='rooms_One'>
                { 
                    rooms?.map((e,i)=>{ 
                            return <div key={i} className='rooms_child'>
                                    <button onClick={()=>hendelDelete(e.room_id)}className='delete_btn'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                        </svg>
                                    </button>
                                    <h2>Xonalar soni {e.room_name}</h2>
                                    <p>bir kvadrat meter {e.room_ametr_price} so'm</p>
                                    <p>Qaysi Branchga tegishliligi: {e.branches_id}</p>
                                </div>
                    })
                } 
                </div>
            </div>
        </div>
    );
}

export default CompRooms;
