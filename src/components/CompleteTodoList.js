

const CompleteTodoList = ({todos}) => {



 
    return (
        
            <div className='w-full h-screen bg-blue-500 p-4 text-white z-10'>
           <div className='flex flex-col'>

            <h2 className='text-2xl text-white '>Tareas completadas</h2>

           <ul className='list-none flex space-y-2 flex-col shadow-2xl w-[80%] mt-5'>
             

            {
               todos && todos?.map(todo => (todo?.done === true ?  <li key={todo?.id}>{todo?.desc}</li> : null))
            }
            

           </ul>


           </div>
          
          
        </div>
        
    )
}

export default CompleteTodoList
