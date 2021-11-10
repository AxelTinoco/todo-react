import { animated } from 'react-spring' //Spring
import React, { useEffect, useReducer, useState } from 'react';
import {FcGoogle,FcCalendar} from 'react-icons/fc'
import {GoPlus} from 'react-icons/go'
import { getDate } from '../helpers/getDate';
import AddTodoForm from './AddTodoForm';
import todoReducer from './Reducer/todoReducer';


const init = () =>  {
    return JSON.parse(localStorage.getItem('todos')) || []
}


const AddToDo = () => {

    const {year,month,date ,dateNumber} = getDate();
   
    const [todos, dispatch] = useReducer(todoReducer,[], init)
    
    const [show, setShow] = useState(false); // Estado del boton de activado y desactivado.

    const [todoid, setTodoid] = useState('')


   const handleAddInput = (e) => {
    setShow(!show)
   }

   useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos))
        
   }, [todos])

   const handleDeleteTask = (todoid) => {

    const action = {
        type: 'delete',
        payload: todoid
    }

    dispatch(action)

}

    const handleToggle = (todoid) => {

        dispatch({
            type: 'toggle',
            payload: todoid
        });

    }
 
 
    
    return (
        


     <div className='flex flex-col h-screen'>

         <div className='flex flex-row p-4 text-3xl space-x-3 justify-end w-full'>
                <FcGoogle />
                <FcCalendar/>
         </div>

         <div className='flex flex-col w-full'>

            {/* <h2 className='capitalize'>{getDate().month.slice(0,3)}.{getDate().year}</h2> */}
            <h2 className='capitalize text-2xl'>{month.slice(0,3)}.{year}</h2>
            <h2 className='capitalize text-5xl'>{date.slice(0,3)}.{dateNumber}</h2>
         </div>
        
        
        <div className='flex'>
 
           
                 {
                     show && <AddTodoForm show={show} dispatch={dispatch} todoid={todoid}/>
                 }
             

          
        </div>


        <div className='flex max-h-full overflow-scroll overflow-x-hidden'>
                {
                      <ul className='list-none flex space-y-2  flex-col shadow-2xl w-[80%]'>
                      {
                          todos.map(todo => (
                              <animated.li 
                              key={todo.id}
                              className="p-2 flex border w-full items-center justify-items-end relative" 
                              >
                             <input type="checkbox" name="" id={todo.id} className='mr-2' onClick={() => handleToggle(todo.id)}/>
                             <label htmlFor={todo.id}>{todo.desc}</label>
                              <button 
                              className='bg-red-500 text-white p-2 absolute right-4 hover:bg-[#0077b6]'
                              onClick={() => handleDeleteTask(todo.id)}
                              >
                                  Borrar
                              </button>
                              </animated.li>   
                          ))
                      }
                     </ul>
                }
        </div>

        <button className='bg-[#4361ee] absolute text-white rounded-full w-14 h-14
         bottom-5 right-5 flex items-center justify-center text-xl '
         onClick={handleAddInput}
         >
            <GoPlus/>
        </button>
      
       
     </div>
        
    )
}

export default AddToDo
