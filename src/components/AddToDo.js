import { animated } from 'react-spring' //Spring
import React, {useEffect, useReducer, useState } from 'react';
import { FcGoogle, FcCalendar } from 'react-icons/fc'
import { GoPlus } from 'react-icons/go'
import { getDate } from '../helpers/getDate';
import AddTodoForm from './AddTodoForm';
import todoReducer from './Reducer/todoReducer';
import CompleteTodoList from './CompleteTodoList';




const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}



const AddToDo = () => {

    const { year, month, date, dateNumber } = getDate();

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    const [show, setShow] = useState(false); // Estado del boton de activado y desactivado.

    const [todoid] = useState('')

    const initialState = 1

    const [showViews, setShowViews] = useState(initialState);
   
  


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

    const handleShowViews = ({target}) => {
        
    switch (target.id) {
        case 'todo':
           return setShowViews(initialState)
            
        case 'complete':
           return setShowViews(3)
            
        default:
            return setShowViews(initialState);
    }
    }





    return (

        <div className='flex flex-row h-screen w-full'>

            <div className='w-1/5 bg-[#3c4f76] flex flex-col place-items-end'>
                
                <button
                id="todo" 
                className={`w-full h-1/3 rounded-l-3xl md:w-1/2 bg-white`}
                onClick={handleShowViews}
                 >
                <div className='transform -rotate-90'>ToDo</div>
                </button>

                {/* <button
                id="delete" 
                className={`w-full h-1/3 rounded-l-3xl md:w-1/2 bg-red-500`}
                onClick={handleShowViews}
                 >
                <div className='transform -rotate-90'>Delete</div>
                </button> */}

                <button
                id="complete" 
                className={`w-full h-1/3 rounded-l-3xl md:w-1/2 bg-blue-500 relative z-10`}
                onClick={handleShowViews}
                 >
                <div className='transform -rotate-90 absolute z-0'>Complete</div>
                </button>
                


            </div>

            <div className='flex flex-col h-screen w-full'>

                <div className=' w-full'>


                    {
                        showViews && showViews === 3 ? <CompleteTodoList todos= {todos}/> : null
                    }



                </div>



                <div className='flex flex-row p-4 text-3xl space-x-3 justify-end w-full'>
                    <FcGoogle />
                    <FcCalendar />
                </div>

                <div className='flex flex-col w-full p-4'>

                    {/* <h2 className='capitalize'>{getDate().month.slice(0,3)}.{getDate().year}</h2> */}
                    <h2 className='capitalize text-2xl'>{month.slice(0, 3)}.{year}</h2>
                    <h2 className='capitalize text-5xl'>{date.slice(0, 3)}.{dateNumber}</h2>
                </div>


                <div className='flex pl-2'>


                    {
                        show && <AddTodoForm show={show} dispatch={dispatch} todoid={todoid} />
                    }



                </div>


                <div className='flex max-h-full overflow-scroll overflow-x-hidden w-full pl-2 p-1'>
                    {
                        <ul className='list-none flex space-y-2  flex-col shadow-2xl w-full'>
                            {
                                todos.map(todo => (
                                    <animated.li
                                        key={todo.id}
                                        className="p-2 flex border w-full items-center justify-items-end relative"
                                    >
                                        
                                        <label htmlFor={todo.id} className={todo.done && 'complete'} onClick={() => handleToggle(todo.id)}>{todo.desc}</label>
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
                    <GoPlus />
                </button>


            </div>
        </div>



    )
}

export default AddToDo


//<input type="checkbox" name="" id={todo.id} className='mr-2'  />