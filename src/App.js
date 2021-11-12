
// import { useState } from 'react';
// import AddToDo from './components/AddToDo';
// import AddToDoList from './components/AddToDoList';
// import {BsToggleOn,BsToggleOff} from 'react-icons/bs'
import AddToDo from './components/AddToDo';
import './index.css';
// import mountain from './assets/mountain.jpg'

function App() {

  

  return (
  <div className='grid grid-cols-12 grid-rows-6 h-screen w-screen'>
      
      <div className='hidden md:grid md:col-start-1 md:col-end-7 bg-mountain bg-cover h-screen bg-center'>
      </div>

      <div className='col-start-1 col-span-12  md:col-start-7 md:col-end-13 overflow-visible'>
        <AddToDo/>
      </div>
      
  </div>
  );
}

export default App;
