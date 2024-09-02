import React from "react";
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Usluge from "./Components/Pages/Usluge";
import Proizvodi from "./Components/Pages/Proizvodi";
import SignUp from "./Components/Pages/SignUp";
import Footer from "./Components/Footer";



function App(){

   return(<>
   <Router>
      <Navbar/>
      <Routes>
      <Route path='/' exact element={ <Home />}></Route>
      <Route path='/Usluge' exact element={ <Usluge />}></Route>
      <Route path='/Proizvodi' exact element={ <Proizvodi />}></Route>
      <Route path='/SignUp' exact element={ <SignUp />}></Route>
      </Routes>
      <Footer/>
   </Router>
   
   </>);
}

export default App