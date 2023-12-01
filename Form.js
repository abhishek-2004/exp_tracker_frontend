import React from 'react'
import {useForm} from 'react-hook-form'  //using react hook can get all data of the form
import List from './List';

export default function Form() {
    const {register, handleSubmit, resetField} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <div className='form max-sm mx-auto w-96'>

        <h1 className='font-bold pb-4 text-xl text-black'>Transactions</h1>
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-4'>
                <div className='input-group text-slate-500'>
                    <input type='text' {...register('name')} placeholder='Salary, House Rent, SIP' className='form-input'></input>    
                </div>
                <select className='form-input text-slate-500' {...register('type')}>
                    <option value="Investment" defaultValue>Investment</option>
                    <option value="Expense" >Expense</option>
                    <option value="Savings" >Savings</option>
                </select>
                <div className='input-group text-slate-500'>
                    <input type='text' {...register('amount')} placeholder='Amount' className='form-input'></input>
                </div>
                <div className='submit-btn'>
                    <button className='border py-2 text-white bg-indigo-500 w-full'>Make Transaction</button>
                </div>
            </div>
        </form>

        <List></List>
    </div>
  )
}
