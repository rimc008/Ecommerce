import React, { useState } from "react";

const Login = ({setToken}) => {
    
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const handleSubmit = async(e) => {

    try {
        e.preventDefault();
        const res = await fetch("http://localhost:4001/api/admin/adminlogin",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({email:form.email,password:form.password})
            })

            const data = await res.json();

            if (data.success){
                localStorage.setItem("token",data.token)
                setToken(data.token)
            }
            else{
                alert(data.message);
                
            }

    } catch (error) {
        console.log(error); 
    }
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white-200">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[350px] p-8 rounded-2xl border border-3 shadow-[10px_10px_0px_0px_black] border-black flex flex-col gap-5"
      >
        
        <h1 className="text-3xl font-bold text-center">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="bg-black hover:scale-105 text-white p-3 rounded-lg font-semibold transition"
        >
          Login
        </button>

      </form>

    </div>
  );
};

export default Login;