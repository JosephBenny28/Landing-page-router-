import './App.css';
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import AboutUS from './components/AboutUS';
import ContactUs from './components/ContactUs';
import Destination from './components/Destination';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element= {<Home/> }/>
        <Route path='/aboutUs' element= {<AboutUS/> }/>
        <Route path='/contactUs' element= {<ContactUs/> }/>
        <Route path='/destination' element= {<Destination/> }/>
      
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
