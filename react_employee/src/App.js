import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import ListEmployee from './component/ListEmployee';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEmployee from './component/CreateEmployee';
import UpdateEmployee from './component/UpdateEmployee';

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<ListEmployee />}></Route>
            <Route path='/employees' element={<ListEmployee />}></Route>
            <Route path='/add-employee' element={<CreateEmployee />}></Route>
            <Route path='/update-employee/:id' element={<UpdateEmployee />}></Route>

          </Routes>

           
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
