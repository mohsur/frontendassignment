
import React,{useEffect} from 'react';
import './App.css';
import Listboard from './components/Listboard/Listboard';
import  Navbar  from './components/Navbar/Navbar';
import {useDispatch} from 'react-redux';
import { Datafetching } from './fetching/fetchingdata';

const App = ()=> {
  const dispatch= useDispatch();
 
  useEffect(()=>{
dispatch( Datafetching ());
  },[dispatch])
  return (
   <>
     <Navbar/>
    <Listboard/>
    
   
   </>
  );
}

export default App;
