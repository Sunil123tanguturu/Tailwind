

import React, { useState } from 'react'
import Dilog from '../Helpers/Dilog'
import Digitalclock from '../Helpers/digitalclock'

const DashboardMain = () => {
  const[open ,setOpen ]=useState(false)
  console.log(open)
  return (
<>
<div onClick={()=>setOpen(true)}>DashboardMain
    <div>
 
      </div></div>
{open && <Dilog setOpen={setOpen}/>} 
{/* <Digitalclock/> */}
</>
    
  )
}

export default DashboardMain



// import React from 'react'

// const DashboardMain = () => {
//   return (
//     // <div className='h-screen place-content-center sm:text-4xl md:text-6xl flex items-center justify-center '>
//     //     <div className='max-w-sm bg-slate-500 rounded-lg shadow'>

//     //     <img src='https://bcassetcdn.com/assets/images/web/hero-banner-background/logo-maker-v4@2x.webp'/>
      
//     //   <div  className='text-2xl text-center p-4 bg-red-100 '>
//     //     created by:Sunil
//     //     email:tanguturu123@gmail.com
//     //   </div>
//     //     </div>

//     // </div>
//     <div className='grid grid-cols-2 '>
//         <div className='bg-[#3D418A] hidden lg:block '><img  className='h-full' src="https://app.empmonitor.com/assets/images/img-12.jpg " alt="" /></div>
//         <div className='p-16 overflow-auto' >
//             <div className=' text-4xl text-[#303F9F]'>Welcome!</div>
//             <div className='mt-4 text-3xl text-black'>Sign Into Your Account</div>
//             <div className='mt-10'>
//     <div >
//           <label className='text-xl' htmlFor="">Email address</label>
//       <div className='pt-2'>
//       <input className='w-[650px] h-[64px] outline-none border-2 p-3' placeholder='Enter Email' type="text" />   
//     </div>
//           </div>
//           <div className='mt-3'>
//           <label className='text-xl' htmlFor="">Password</label>
//       <div className='pt-2'>
//       <input className='w-[650px] h-[64px] outline-none border-2 p-3' placeholder='Password' type="text" />   
//     </div>
//           </div>
//           {/* <div>
//           <label className='text-xl' htmlFor="">Password</label>
//           <div>
//       <input placeholder='Enter password' type="text" />   
//       </div>
//           </div> */}
//              <div className='flex justify-between' >
//                 <div className='mt-5 mb-7 text-lg'>
//                     <input type="checkbox" />
//                     <span  className='pl-3'>Remmeber me </span>
//                 </div>
//                 <span  className='mt-5 mb-7 text-lg pl-3 underline text-blue-600'>Forgot password?</span>
//                 {/* <button className='w-[650px] h-[64px] bg-[#4150B1] text-white' >Login</button>
//                 <span className='flex justify-center mt-7'>Admin Login?</span> */}
//           </div>
//           <div>
//             <button className='w-[650px] h-[64px] bg-[#4150B1] text-white' >Login</button>
//             <span className='flex justify-center mt-7 text-[#4150B1]'>Admin Login?</span>
//           </div>
             
//             </div>
//         </div>
        
//     </div>

//   )
// }

// export default DashboardMain