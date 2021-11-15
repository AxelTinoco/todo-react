require("@lottiefiles/lottie-player");


const CompleteTodoList = ({todos}) => {



 
    return (
        
            <div className='w-full h-screen bg-blue-500 p-4 text-white z-10'>
           <div className='flex flex-col'>

            <h2 className='text-2xl text-white '>Tareas completadas</h2>

           <ul className='list-none flex space-y-2 flex-col shadow-2xl w-[80%] mt-5'>
             

            {
               todos && todos?.map(todo => (todo?.done === true ?  
               <li className="p-2 flex border w-[100%] text-blue-400 items-center justify-items-end bg-green-100"
                key={todo?.id}>{todo?.desc}
                <div className='flex justify-around'>
        <lottie-player
        className='flex'
        style={{ width: '10%' , height:'10%', display:'flex',margin :'0'}}
        autoplay
        speed='1'
        mode="normal"
        src="https://assets6.lottiefiles.com/packages/lf20_pwjpnzxa.json"
        />
        
        </div>
                
                </li> : null))
            }
            

           </ul>


           </div>
          
          
        </div>
        
    )
}

export default CompleteTodoList
