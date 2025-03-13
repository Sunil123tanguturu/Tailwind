import React from 'react'

const Dilog = ({setOpen}) => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='w-[300px]  lg:w-[400px] bg-gray-200 rounded-2xl shadow-lg shadow-white'>
          <div className='flex justify-center pt-6'><img className='size-16' src="https://img.icons8.com/?size=100&id=21067&format=png&color=000000" alt="" />
  
        </div>
        <div className='p-2 text-xl font-bold content-center flex justify-center'>
          Are you sure to delte the user
        </div>
        <div className='p-3 text-[12px] lg:text-sm font-bold text-center justify-center'>
 Lorem ipsum dolor, sit amet consecte  Lorem ipsum dolor, sit amet consecte
        </div>
        <div className='flex float-end m-3 gap-3'>
          <button className='p-2 bg-white rounded-lg' onClick={()=>{setOpen(false)}}>cancel</button>
          <button  className='p-2 bg-red-400 rounded-lg'> Delete</button>
        </div>
        </div>
    </div>
  )
}

export default Dilog