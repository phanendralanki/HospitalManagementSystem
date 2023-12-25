import React,{useState} from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import Header from './Header';
const DoctorLogin = () => {

   const navigate = useNavigate();
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");

   const handleNameChange = (e) => {
     setName(e.target.value);
   };

   const handlePasswordChange = (e) => {
     setPassword(e.target.value);
   };

   const login = async (e) => {
     e.preventDefault();

     const loginData = {
       name,
       password,
     };

     const response = await fetch("http://localhost:5000/login", {
       method: "POST",
       headers: {
         "Content-type": "application/json",
       },
       body: JSON.stringify(loginData),
     });

     if (response.status === 200) {
       alert("Login Successful");
       setTimeout(() => {
         navigate("/dashboard"); // Redirect to the dashboard or any other page
       }, 2000);
     } else if (response.status === 401) {
       alert("Invalid credentials");
     } else {
       alert("Something went wrong");
     }
   };

   return (
     <>
       <Header />

       <section className="bg-gray-50 dark:bg-gray-900 mt-5">
         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
           <NavLink
             to="/"
             className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
           >
             <img
               className="w-8 h-8 mr-2"
               src="https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg?size=338&ext=jpg&ga=GA1.1.1788068356.1703376000&semt=ais"
               alt="logo"
             />
             Patient Login
           </NavLink>
           <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Login to your account
               </h1>
               <form
                 className="space-y-4 md:space-y-6"
                 action=""
                 onSubmit={login}
               >
                 <div>
                   <label
                     htmlFor="name"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                   >
                     name
                   </label>
                   <input
                     type="text"
                     name="name"
                     id="mobile"
                     value={name}
                     onChange={handleNameChange}
                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="name"
                     required=""
                   />
                 </div>

                 <div>
                   <label
                     htmlFor="password"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                   >
                     Password
                   </label>
                   <input
                     type="password"
                     name="password"
                     id="password"
                     value={password}
                     onChange={handlePasswordChange}
                     placeholder="••••••••"
                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required=""
                   />
                 </div>

                 <button
                   type="submit"
                   className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                 >
                   Login
                 </button>
                 <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                   Don't have an account?{" "}
                   <NavLink
                     to="/patientRegistration"
                     className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                   >
                     Register here
                   </NavLink>
                 </p>
               </form>
             </div>
           </div>
         </div>
       </section>
     </>
   );
}

export default DoctorLogin
