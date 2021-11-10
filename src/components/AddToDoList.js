import React from 'react'

const AddToDoList = ({task}) => {
    console.log('me renderice')
    
    return ( 
        <div className='p-2 w-full h-12 '>
            <p className='text-white'>{task}</p>
        </div>
    )
}

export default AddToDoList
