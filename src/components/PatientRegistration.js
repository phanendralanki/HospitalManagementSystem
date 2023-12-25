import React,{useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Header from "./Header";
const PatientRegistration = () => {

  const navigate = useNavigate();
  //name, age, phn number, problem
  
  const [loading,setLoading] = useState(false);

  const [inputValue,setInputValue] = useState({
    userName:"",
    age:"",
    phoneNumber:"",
    problem:"",
    password:"",
    confirmPassword:""
  });

  const setValue = (e) =>{
      // console.log(e.target.value);
      const {name,value} = e.target;

      setInputValue(()=>{
        return {
          ...inputValue,
          [name]:value
        }
      })
  };


  const addUserdata = async(e) =>{
    setLoading(true);
    e.preventDefault();

    const {userName,age,phoneNumber,problem,password} = inputValue;
    //validations

    const data = await fetch("http://localhost:5000/api/user/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        userName,age,phoneNumber,problem,password,
      })
    });

    const result = await data.json();
    //console.log(res.status);
    if(result.status === 201){
      setLoading(false);
      toast.success("Registration Successful",{
        position:"top-center"
      });
      setInputValue({...inputValue,userName:"",age:"",problem:"",phoneNumber:"",password:""})
      navigate("/");
    }else{
      toast.error("Something went wrong");
    }
  }
  
  return (
    <>
    <Header/>
      {/* toaster */}
      <Toaster position="top-center" reverseOrder={false} />
      {/* toaster */}
      <section className="bg-gray-50 dark:bg-gray-900 mt-5">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg?size=338&ext=jpg&ga=GA1.1.1788068356.1703376000&semt=ais"
              alt="logo"
            />
            Patient Registration
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="userName"
                    id="name"
                    onChange={setValue}
                    value={inputValue.userName}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name"
                    required=""
                  />
                </div>

                {/* Age */}
                <div>
                  <label
                    for="age"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    AGE
                  </label>
                  <input
                    type="text"
                    name="age"
                    id="age"
                    onChange={setValue}
                    value={inputValue.age}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="age"
                    required=""
                  />
                </div>

                <div>
                  <label
                    for="mobile"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="mobile"
                    onChange={setValue}
                    value={inputValue.mobileNumber}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+91791***"
                    required=""
                  />
                </div>

                <div>
                  <label
                    for="problem"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Problem
                  </label>
                  <input
                    type="text"
                    name="problem"
                    id="problem"
                    onChange={setValue}
                    value={inputValue.problem}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Health issue"
                    required=""
                  />
                </div>

                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={setValue}
                    value={inputValue.password}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    onChange={setValue}
                    value={inputValue.confirmPassword}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      for="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <NavLink
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        to="/"
                      >
                        Terms and Conditions
                      </NavLink>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={addUserdata}
                  isLoading = {loading}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <NavLink
                    to="/patientLogin"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PatientRegistration;
