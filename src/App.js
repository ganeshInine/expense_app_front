import logo from './logo.svg';
import './App.css';
import Header from './componunts/common/header';
import Footer from './componunts/common/footer';
import CreateUser from './componunts/users/create.user';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
        <CreateUser/>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
