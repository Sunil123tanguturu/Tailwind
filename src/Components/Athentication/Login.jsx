import React from 'react'

function Login() {
  return (
    <div className='flex '>
      <div className='w-2/3 flex justify-center items-center flex-col'>
        <img className='mt-16 ml-32  md:ml-0' src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg" alt="" />
        <h className='ml-32  md:ml-0 text-[15px] md:text-3xl font-bold p-3 inline'>Welcome back</h>
        <button className='w-[350px] md:w-[450px] border-2 border-gray-300 mt-3 p-2 font-semibold bg-gray-100 flex ml-32 md:ml-0' > <img className='h-8' src="data:image/jpeg;base64,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" alt="" /><p className='px-2 md:px-16 py-1'> Continue With Google</p></button>
        <button className='w-[350px] md:w-[450px] border-2 border-gray-300 mt-3 p-2 font-semibold bg-gray-100 flex  ml-32  md:ml-0' > <img className='h-8' src="https://logolook.net/wp-content/uploads/2021/06/Facebook-Logo.png" alt="" /><p className='px-4 md:px-16 py-1'> Continue With Facebook</p></button>
        <div className="mt-6 flex items-center justify-center">
          <hr className="w-[200px]" />
          <p className="mx-4 font-bold">OR</p>
          <hr className="w-[120px] md:w-[200px]" />
        </div>
        <div className='flex flex-col'>
          <input type="text" className='ml-32  md:ml-0 w-[350px] md:w-[450px]  p-3 text-xl border-2 border-gray-300 hover:outline-none hover:border-spacing-1 focus:border-blue-300 mt-7 focus:outline-none' placeholder='Email or User Name' />
          <input type="text" className='ml-32  md:ml-0 w-[350px] md:w-[450px]  p-3 text-xl border-2 border-gray-300 hover:outline-none hover:border-spacing-1 focus:border-blue-300   mt-7 focus:outline-none' placeholder='Password' />
        </div>
        <button className='w-[350px] md:w-[450px]  border-2 border-gray-300 mt-5 p-2 font-semibold bg-blue-500 text-center m-4 ml-32  md:ml-0 text-2xl text-white' > <p className='px-16 py-1'> Login</p></button>
        <div className='mt-11'>
          <hr />
        </div>
      </div>
      <div className='w-1/3'>
        <img className='h-screen hidden md:block' src="https://www.f-cdn.com/assets/main/en/assets/job-post/redesign/bird.jpg" alt="" />
      </div>
    </div>
  )
}

export default Login

// import React, { useState } from "react";

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };
// //
//   return (
//     <div className="bg-[#ECECEC]">
//       <div className="h-screen w-screen flex justify-center items-center">
//         <div
//           className="shadow-lg bg-white flex"
//           style={{ height: "70%", width: "65%" }} // Reduced size of the form container
//         >
//           {/* Image Section - Left Half */}
//           <div className="hidden lg:block relative w-1/2 h-full">
//             <img
//               src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt="Gym"
//               className="h-full w-full object-cover"
//             />
//             {/* Overlay Gym Name */}
//             <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
//             <h1
//               className="text-4xl font-bold bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent"
//               style={{
//                 textShadow: `
//                   3px 3px 3px rgba(0, 0, 0, 0.6), /* Bottom-right shadow */
//                   -3px -3px 3px rgba(0, 0, 0, 0.4) /* Top-left shadow */
//                 `,
//               }}
//             >
//               Fitness Empire Gym
//             </h1>
//             </div>
//           </div>

//           {/* Form Section - Right Half */}
//           <div className="w-1/2 h-full flex justify-center items-center">
//             <div className="w-[85%] bg-[#f9f9f9] p-31 rounded-lg shadow-md">
//               {/* Toggle Button */}
//               <div className="flex justify-center mb-4">
//                 <button
//                   onClick={toggleForm}
//                   className={`px-4 py-2 text-sm rounded-md border-2 transition-colors duration-300 ${
//                     isLogin
//                       ? "border-gray-500 text-gray-500 hover:bg-gray-200"
//                       : "border-black text-black hover:bg-black hover:text-white"
//                   }`}
//                 >
//                   {isLogin ? "Switch to Register" : "Switch to Login"}
//                 </button>
//               </div>

//               {/* Login Form */}
//               {isLogin ? (
//                 <form>
//                   <div className="mb-4">
//                     <label htmlFor="email" className="block text-gray-700">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#dc4ea2] transition duration-200"
//                       placeholder="Enter your email"
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label htmlFor="password" className="block text-gray-700">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       id="password"
//                       className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#dc4ea2] transition duration-200"
//                       placeholder="Enter your password"
//                     />
//                   </div>

//                   <div className="flex justify-between items-center mb-4">
//                     <div className="flex items-center">
//                       <input type="checkbox" className="mr-2" />
//                       <p className="text-sm text-gray-700">Remember me</p>
//                     </div>
//                     <p className="text-sm text-blue-600 cursor-pointer hover:text-blue-800">
//                       Forgot password?
//                     </p>
//                   </div>
//                   <div className="mt-6">
//                     <button
//                       type="submit"
//                       className="w-full p-3 rounded-md text-white bg-gray-500 hover:bg-gray-1000"
//                     >
//                       Login
//                     </button>
//                   </div>
//                 </form>
//               ) : (
//                 // Registration Form
//                 <form>
//                   <div className="mb-4">
//                     <label htmlFor="email" className="block text-gray-700">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#dc4ea2] transition duration-200"
//                       placeholder="Enter your email"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label htmlFor="password" className="block text-gray-700">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       id="password"
//                       className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#dc4ea2] transition duration-200"
//                       placeholder="Enter your password"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="confirmPassword"
//                       className="block text-gray-700"
//                     >
//                       Confirm Password
//                     </label>
//                     <input
//                       type="password"
//                       id="confirmPassword"
//                       className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#dc4ea2] transition duration-200"
//                       placeholder="Confirm your password"
//                     />
//                   </div>
//                   <div className="mt-6">
//                     <button
//                       type="submit"
//                       className="w-full p-3 rounded-md text-white bg-gray-500 hover:bg-gray-1000"
//                     >
//                       Register
//                     </button>
//                   </div>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
