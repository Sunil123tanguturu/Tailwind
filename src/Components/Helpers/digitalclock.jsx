import { data } from 'autoprefixer'
import React, { useEffect } from 'react'
import { useState } from 'react';

const digitalclock = () => {
    let [hour,setHour] = useState(null)
    let [second,sesecond] = useState(null)
    let [min,setDmin] = useState(null)
    let [day,setday] = useState(null)

setInterval(() => {
    setHour(new Date().getHours())
    sesecond(new Date().getSeconds())
    setDmin(new Date().getMinutes())
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

var dayName = days[new Date().getDay()];
setday(dayName)

}, 1000);

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='w-[550px]  border-2 border-dotted border-black rounded shadow-sm h-[300px] bg-[#9CF2D7]'>
        <h1 className='flex justify-center text-3xl items-center pt-11'>Digital Clock</h1>
              <div className='flex h-full justify-center items-center flex-row gap-4' >
           
          
                <button className='h-16 w-14 border-black border-2 bg-gray-400 rounded-2xl shadow-2xl'>{day} <p className='text-gray-200'>  Day</p></button>
                <button className='h-16 w-14 border-black border-2 bg-gray-500 rounded-2xl shadow-2xl'>{hour} <p className='text-gray-200'>  hours</p></button>
                <button className='h-16 w-14 border-black border-2 bg-gray-500 rounded-2xl shadow-2xl'>{min} <p className='text-gray-200'>  min</p></button>

                <button className='h-16 w-14 border-black border-2 bg-gray-500 rounded-2xl shadow-2xl'>
                    {second}
                    <p className='text-gray-200'>  seconds</p>
                </button>
             <div>     
                  {/* {time} */}
                  </div>


              </div>
           <div>
           </div>
        </div>
    </div>
  )
}

export default digitalclock