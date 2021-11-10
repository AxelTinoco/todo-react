
// import { useState } from 'react';
// import AddToDo from './components/AddToDo';
// import AddToDoList from './components/AddToDoList';
// import {BsToggleOn,BsToggleOff} from 'react-icons/bs'
import AddToDo from './components/AddToDo';
import './index.css';
import mountain from './assets/mountain.jpg'

function App() {

  

  return (
  <div className='grid grid-cols-12 grid-rows-6 h-screen w-screen'>
      
      <div className=' md:col-start-1 md:col-end-7'>
          <img src={mountain} alt="mountain"  className='h-screen w-full'/>
      </div>


      <div className='col-start-1 h-screen relative z-0 bg-green-200 md:col-start-7'>

      </div>
      <div className='col-start-1 row-start-2 z-10  md:col-start-7 md:flex md:flex-row-reverse'>
        <button className=' bg-white rounded-l-3xl w-full h-full  md:w-1/2'><div className='transform -rotate-90'>ToDo</div></button>
      </div>       
      
      <div className='col-start-1 row-start-3 z-10  md:col-start-7 md:flex md:flex-row-reverse'>
        <button className='bg-blue-500 w-full h-full rounded-l-3xl md:w-1/2'><div className='transform -rotate-90'>ToDo</div></button>
      </div> 
      
      <div className='col-start-1 row-start-4 z-10  md:col-start-7 md:flex md:flex-row-reverse'>
        <button className='bg-red-500 w-full h-full rounded-l-3xl md:w-1/2'><div className='transform -rotate-90'>ToDo</div></button>
      </div> 

      <div className='col-start-1 row-start-5 z-10  md:col-start-7 md:flex md:flex-row-reverse'>
        <button className='bg-purple-500  w-full h-full rounded-l-3xl md:w-1/2'><div className='transform -rotate-90'>ToDo</div></button>
      </div> 
      
      
   
      <div className='col-start-3 col-span-10 md:col-start-9 md:col-end-12 overflow-visible'>
        <AddToDo/>
      </div>
      
  </div>
  );
}

export default App;
