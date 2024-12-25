import './App.css';
import Header from './componunts/common/header';
import Footer from './componunts/common/footer';
import CreateUser from './componunts/users/create.user';
import UpdateUser from './componunts/users/update.user';
import UserProfile from './componunts/users/user.profile';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import CreateExpense from './componunts/expense/create.expense';
import ExpenseList from './componunts/expense/get.expenses';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/create-user' element={<CreateUser/>} />
          <Route path='/update-user/:id' element={<UpdateUser/>}/>
          <Route path="user-profile/:id" element={<UserProfile/>} >
            <Route path='create-expense' element={<CreateExpense/>} />
            <Route path='get-expenses' element={<ExpenseList/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
