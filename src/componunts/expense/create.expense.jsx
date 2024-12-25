import React, { useState } from "react";
import { CreateExpenseService } from "../service/user.expense";
const CreateExpense=()=>{
    const[expense,setExpense] =useState({
        "amount":0,
        "expense_type":"",
        "description":"",
        "user_id":1
    });
    const onchange=(e)=>{
        const {name,value} =e.target;
        setExpense((prevExpense)=>({
            ...prevExpense,
            [name]:value
        }))
    }
    const onSubmit =async(e)=>{
        // e.preventDefaul();
        e.preventDefault()
        try {
            const response =await CreateExpenseService(expense);
            console.log(response);
        } catch (error) {
            console.error()
        }
        
    }
    return(
    <>
        <form  onSubmit={onSubmit}>
        <input type="number" name="amount" placeholder="Enter the amount" value={expense.amount} onChange={onchange}/>
            <input type="text" name="expense_type" placeholder="Enter the expense type" value={expense.expense_type} onChange={onchange}/>
            <textarea name="description" placeholder="enter the description"  onChange={onchange} value={expense.description}></textarea>
            <input type="submit" name="submit" value="submit"/>
        </form>
    </>
    )
}
export default CreateExpense;