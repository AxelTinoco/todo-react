import AddToDo from './components/AddToDo';
import './index.css';
require("@lottiefiles/lottie-player");






function App() {

  

  return (
  <div className='grid grid-cols-12 grid-rows-6 h-screen w-screen'>
      
      <div className='hidden md:grid md:col-start-1 md:col-end-7 bg-mountain bg-cover h-screen bg-center'>
      <span className='m-0 p-0 absolute'>App v.0.5. Beta</span>
        <div className=' backdrop-filter backdrop-blur-[2px] 
        w-4/5 place-self-center h-4/5 text-center rounded-3xl 
        border border-white p-4 shadow-2xl h-contain'>
          <h2 className='text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-blue-500'>ToDo App</h2>
          <ul className='text-left p-8 text-3xl space-y-4 list-disc text-white '>
            <li>Crear Tareas</li>
            <li>Eliminar Tareas</li>
            <li>Persistencia de Datos</li>
            <li>React,TailwindCSS & React Spring</li>
          </ul>

        <div className='w-full flex justify-center'>
        <lottie-player
        className='flex'
        style={{ width: '40%' , height:'40%', display:'flex',margin :'0'}}
        autoplay
        loop
        speed='1'
        mode="normal"
        src="https://assets9.lottiefiles.com/packages/lf20_exsezj76.json"
        />
        </div>

                        

        </div>

      </div>

      <div className='col-start-1 col-span-12  md:col-start-7 md:col-end-13 overflow-visible'>
        <AddToDo/>
      </div>
      
  </div>
  );
}

export default App;
