import React from 'react';
import './homeMain.css'
import { useState, useEffect } from 'react'

const HomeMain = () => {
    
    const [company, setCompany] = useState([])
    const [branches, setBranches] = useState()
    const [rooms, setRooms] = useState()
    const [comp_year, setComp_year] = useState()
    const [branch_year, setBranch_year] = useState()
    const [room_year, setRoom_year] = useState()
    const [banks, setBanks] = useState()
    useEffect(() => {
        fetch(`http://localhost:9000/company`)
        .then(res => res.json())
        .then(data => {
            setCompany(data)
        })}, [])

    const hendelCompany = async () =>{
        var opt = document.getElementById('small1')
        var id = opt.value
        await fetch(`http://localhost:9000/company/${id}`,{
            method: 'GET'
        }).then(res =>res.json())
        .then(data =>{
            setComp_year(data)
        })
        var opt = document.getElementById('small1')
        var id = opt.value
        fetch(`http://localhost:9000/branches/${id}`,{
            method: 'GET'
        })
        .then(res =>res.json())
        .then(data =>{
            setBranches(data)
        })
    }
    const hendelBranch = async () =>{
        
        var opt = document.getElementById('small2')
        var id = opt.value
        await fetch(`http://localhost:9000/branches/one/${id}`,{
            method: 'GET'
        })
        .then(res =>res.json())
        .then(data =>{
            setBranch_year(data)
        })
        var opt = document.getElementById('small2')
        var id = opt.value
         fetch(`http://localhost:9000/rooms/${id}`,{
            method: 'GET'
        })
        .then(res =>res.json())
        .then(data =>{
            setRooms(data)
        })
    }
    const hendelRoom = async () =>{
        var opt = document.getElementById('small3')
        var id = opt.value
        await fetch(`http://localhost:9000/rooms/one/${id}`,{
            method: 'GET'
        })
        .then(res =>res.json())
        .then(data =>{
            setRoom_year(data)
        })

    }
    var money = document.getElementById('99999')

    const hendelYear = async ()=>{
        let money = document.getElementById('99999')
        await fetch(`http://localhost:9000/banks/${money.textContent}`,{
            method: 'GET'
        })
        .then(res =>res.json())
        .then(data =>{
            setBanks(data)
        })

        console.log(banks);
        console.log(document.getElementById('333'));
    }

    return (
        <div className='homeMain'>
            <div className='container'>
                <h1 className='homeMain_Title'>Choose a house by filtering</h1>

                <form className='form_div'>
                   <div>
                    <label htmlFor="small1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Company</label>
                        <select onChange={()=>hendelCompany()} id="small1" className="block p-2 mb-6 w-25 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option defaultValue='Choose a country' hidden>Choose a Company</option>
                            {
                                company?.map((e,i) => (
                                <option id={i} key={i} value={e.company_id}>{e.company_name}</option>
                                    ))
                            }
                        </select>
                   </div>
                   <div>
                    <label htmlFor="small2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Branch</label>
                        <select onChange={()=>hendelBranch()} id="small2" className="block p-2 mb-6 w-25 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option hidden defaultValue='Choose a country'>Choose a Branch</option>
                            {
                                branches?.map((e,i)=>{
                                  return  <option id={i} key={i} value={e.branch_id}>{e.branch_name}</option>
                                })
                            }
                            
                        </select>
                   </div>
                   <div>
                    <label htmlFor="small3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Room</label>
                        <select onChange={()=>hendelRoom()} id="small3" className="block p-2 mb-6 w-25 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option hidden  defaultValue='Choose a country'>Choose a Room</option>
                            {
                                rooms?.map((e,i)=>{
                                  return  <option id='999' key={i} value={e.room_id}>{e.room_name}</option>
                                })
                            }
                        </select>
                   </div>
                   <div>
                    <label htmlFor="small" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Year</label>
                        <select onChange={()=>hendelYear()} id="small" className="block p-2 mb-6 w-25 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option hidden defaultValue='Choose a country'>Choose a Year</option>
                            <option id='1' value="10">10 yil</option>
                            <option id='2' value="15">15 yil</option>
                            <option id='3' value="20">20 yil</option>
                            <option id='4' value="25">25 yil</option>
                        </select>
                   </div>
                </form>


                <div className='Elements'>
                    <div className='Company'>
                        {
                            comp_year?.map((e,i)=>{
                                return <div key={i}>                           
                                                <img className='Company_img' src={e.company_img} alt="" />
                                                <h1 className='Company_name'>{e.company_name}</h1>
                                            </div>
                            })
                        }
                        {
                            branch_year?.map((e,i)=>{
                                return <p key={i}>{e.branch_name}</p>
                            })
                        }                        
                        {
                            room_year?.map((re,ri)=>{   
                                return <div className='RoomFetch' key={ri}>
                                    <p>{re.room_name} rooms</p>
                                   <p id='llll'>{re.room_ametr_price} meter square price</p> 
                                   <p>{re.room_meter} meter square</p>
                                    <p id='99999' className='allPrice'>{re.room_meter * re.room_ametr_price} </p>
                                </div>
                                })
                        }
                        </div>
                        {
                            banks?.map((e,i)=>{
                                return<div key={i} className='Company'>
                                    <h1> {e.bank_name} </h1>
                                    <img className='bankImg' src={e.bank_img} alt="" />
                                    <p>Bank have money : {e.bank_many}</p>
                                    <p>Murtagate duraction : {e.bank_durection}</p>
                                    <p id='333'> starting payment : {e.bank_start_payment}%</p>
                                </div>
                            })
                        }
                        {
                            banks?.map((e,i)=>{
                                return<div key={i} className='Company'>
                                    <h1 className='Conculator'>Conculator</h1>
                                    <h1>House  { money.textContent } </h1>
                                    <p>Starting Payment : {money.textContent  / e.bank_durection*12}</p>
                                    <p>Monthly Payment : {money.textContent / e.bank_start_payment}</p>
                                    <p>Murtagate duraction : {e.bank_durection}</p>
                                    <p>Bank servise : {e.bank_service}</p>
                                </div>
                            })
                        }
                </div>
            </div>
        </div>
    );
}

export default HomeMain;