import { useSpring, animated,config } from 'react-spring' //Spring
import {FcInspection} from 'react-icons/fc'
import { useForm } from '../hooks/useForm'

const AddTodoForm = ({dispatch,show}) => {


   const stylesWidth = useSpring({
    from: { width : "80%"},
    to: {width: "2%"} ,
    background: "black",
    config: config.gentle,
    reverse: show,
  })

  const [ {description} ,handleInputChange, reset] = useForm( {

    description:''

}  )


    

    const handleSubmit = (e) => {

        e.preventDefault();

        if(description.length < 2 ){
            return;
        }


        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset();

    }




    return (
        <animated.form 
        style = {stylesWidth}
        className="bg-blue-700 text-white flex justify-start items-center relative rounded-lg my-2"
        onSubmit={handleSubmit}
        >
        <FcInspection className='text-3xl absolute left-1'/>
        <input 
            type="text"
            className='flex bg-black w-full p-2 pl-10 rounded-lg'
            placeholder='Agregar Tarea...'
            onChange={handleInputChange}
            value={description}
            name="description" 
            autoComplete="off"
            />
        </animated.form>
    )
}

export default AddTodoForm
