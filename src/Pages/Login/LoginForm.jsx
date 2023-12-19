import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSessionData } from '../../SessionDataContex';

const LoginForm = ({ setPhoneNumber }) => {
  const userInputRef = useRef();
  const passwordInputRef = useRef();
  const [isValid, setIsValid] = useState(false);
  const [showErrMessage , setShowErrMessage] = useState(false)

  const { sessionData  } = useSessionData();
  console.log('Session Data is :',sessionData )

  const submitHandler = (e) => {
    e.preventDefault();

    const username = userInputRef.current.value;
    const password = passwordInputRef.current.value;

    // Assuming this is a placeholder for authentication logic
    if (username === "Behrouz" && password === "1382") {
      setIsValid(true);
    } else {
      setIsValid(false);
      setShowErrMessage(true)
    }
  };

  return (
    <div className="bg-gray-300 w-full flex items-center justify-center h-screen">
      <div className="item-center h-auto w-full max-w-md bg-slate-50 border border-slate-200 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          Login
        </h2>
        <form onSubmit={submitHandler} className="flex flex-col">
          <input
            ref={userInputRef}
            type="text"
            placeholder="Username"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          />
          <input
            ref={passwordInputRef}
            type="password"
            placeholder="Password"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          />
          {!isValid && showErrMessage && (
            <div className="bg-red-200 rounded-sm p-2">
              <p className="text-xs">Wrong username or password</p>
            </div>
          )}

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Login
          </button>
          <Link to="/CreateUser" className="text-xs mt-2">
            Don't have an account? Create user
          </Link>
        </form>
        {isValid && (
          <Link
            to="/App"
            className="text-lg bg-green-400 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-300 transition ease-in-out duration-150 flex w-1/3"
          >
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
