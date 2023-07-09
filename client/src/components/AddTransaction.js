import React, {useState, useContext} from 'react'
import {useForm} from 'react-hook-form'
import { GlobalContext } from '../context/GlobalState';
import { AiOutlineOrderedList } from "react-icons/ai";


export const AddTransaction = () => {
  
  const { addTransaction } = useContext(GlobalContext);
     const {register,handleSubmit,formState:{errors},reset}=useForm();

     const fun=(data)=>{

      const obj=data;

      obj.amount=(+obj.amount)
      

      addTransaction(obj);
      reset();
     }




  return(
    <div>
       <h3><AiOutlineOrderedList/> Add new transaction</h3>
      <form onSubmit={handleSubmit(fun)}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..."{...register("text",{required:true})} />
          {errors.text?.type==='required'  && <p className='hello'>* please Enter</p>}
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" placeholder="Enter amount..." {...register("amount",{required:true})}/>
          {errors.amount?.type==='required'  && <p className='hello'>* please Enter</p>}
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
     
    
  )
}






























