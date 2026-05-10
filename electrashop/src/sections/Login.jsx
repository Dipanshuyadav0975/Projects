import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {

    // CREATOR LOGIN
    if (email === "RD@gmail.com" && password === "123456") {

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);

      setShowWelcome(true);

      setTimeout(() => {

        window.location.href = "/";

      }, 2000);
    }

    // NORMAL LOGIN
    else if (email === "admin@gmail.com" && password === "1234") {

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);

      window.location.href = "/";
    }

    // WRONG LOGIN
    else {

      setError(
        "Access restricted.\nYou are not a premium member of RD Groups.\nContact: RDGroups@gmail.com"
      );

      setShowPopup(true);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-4 w-[300px]">

        <h2 className="text-2xl font-bold text-center text-themepurple">
          ElectraShop Login ⚡
        </h2>

        <input
          type="email"
          placeholder="Enter email"
          className="border p-2 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          className="border p-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-themepurple text-white py-2 rounded hover:opacity-90"
        >
          Login
        </button>

      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

          <div className="bg-white p-6 rounded-xl w-[320px] text-center shadow-lg">

            <h2 className="text-red-500 font-bold text-lg mb-3">
              Access Denied
            </h2>

            <p className="text-gray-700 whitespace-pre-line">
              {error}
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-themepurple text-white px-4 py-2 rounded"
            >
              Close
            </button>

          </div>
        </div>
      )}
      {showWelcome && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">

          <div className="bg-white px-10 py-8 rounded-2xl shadow-2xl text-center animate-pulse">

            <h1 className="text-4xl font-bold text-themepurple tracking-wide">
              Welcome Creator
            </h1>

            <p className="text-gray-500 mt-3 italic">
              RD Groups Creator Access Granted
            </p>

          </div>
        </div>
      )}

    </div>
  );
};

export default Login;
