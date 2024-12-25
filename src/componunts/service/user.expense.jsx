const CreateExpenseService= async(expense)=>{
   try {
      const response =await fetch(`http://localhost:3001/expense/createExpense`,{
        headers:
        {
         'content-type':'application/json'
         },
        method:'POST',
        body:JSON.stringify(expense) ,
     });
     if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
     }
     return await response.json();
   } catch (error) {
      throw error
   }
}

const getExpensesListService=async(user_id)=>{
   try {
      const response =await fetch(`http://localhost:3001/expense/getAllExpenses/${user_id}`)
      if(!response.ok){
         throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
   } catch (error) {
      throw error
   }
}

export {CreateExpenseService,getExpensesListService};