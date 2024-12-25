import { useEffect, useState } from "react";
import { getExpensesListService } from "../service/user.expense";
const ExpenseList=()=>{
    const [expenses,setExpenses] =useState([]);
    useEffect(()=>{
        getAllExpenses(1);
    },[]);

    const getAllExpenses=async(user_id)=>{
        try {
            const response = await getExpensesListService(user_id);
            console.log(response.data);
            if(response?.data){
                setExpenses(response.data);
            }else{
                console.error("Invalid data format:", response);
            }
            
        } catch (error) {
            console.error();
        }
    }
    return(
        <>
            <h1>Welcome....!</h1>
            <ul>
                {
                expenses.length>0?expenses.map((expense)=>(
                 <li key={expense.id}>
                    <strong>Type:</strong> {expense.expense_type} | 
                        <strong>Amount:</strong> {expense.amount} | 
                        <strong>Description:</strong> {expense.description}
                 </li>   
                )):''
                }
            </ul>
        </>
        
    )
}

export default ExpenseList;