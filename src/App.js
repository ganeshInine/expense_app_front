import './App.css';
import Header from './componunts/common/header';
import Footer from './componunts/common/footer';
import CreateUser from './componunts/users/create.user';
import UpdateUser from './componunts/users/update.user';
import UserProfile from './componunts/users/user.profile';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Header/>
      </header> */}
        {/* <CreateUser/> */}
        {/* <UpdateUser/> */}
        <UserProfile/>
      {/* <footer>
        <Footer/>
      </footer> */}
    </div>
  );
}

export default App;
