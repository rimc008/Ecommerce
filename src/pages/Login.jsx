import { correctBoxShadow } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setGettoken}) => {

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const res = await fetch( isLogin ? "http://localhost:4001/api/user/login" : "http://localhost:4001/api/user/register" ,
        {
          method:"POST",
          headers : {
            "Content-Type":"application/json"
          },
          body : isLogin ? JSON.stringify({email : form.email , password :form.password}) : JSON.stringify({name : form.name , email : form.email ,password : form.password})
        }
      )

      const data = await res.json();

      if (data.success){
        localStorage.setItem("token",data.token);

        isLogin ? alert("Login Successfull") : alert("SignUp Sucessfull")

        setGettoken(localStorage.getItem("token"))        
        navigate("/")

      }
      else{
        alert( data.message )
      }

    } catch (error) {
      console.log(error);
      
    }

    finally{
      console.log(isLogin ? "LOGIN" : "SIGNUP", form);
    }
    
  };

  const styles = {
    container: {
      height: "88vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "white",
      
    },
    card: {
      width: "450px",
      padding: "40px",
      border: "solid black 3px",
      borderRadius:"20px",
      backgroundColor: "#fff",
      boxShadow:"10px 10px 0px black"
      
    },
    title: {
      textAlign: "center",
      marginBottom: "30px",
      fontSize: "30px",
      fontWeight: "bold",
      color: "#222",
      
    },
    input: {
      width: "418px",
      padding: "16px",
      marginBottom: "14px",
      border: "1px solid #ddd",
      borderRadius: "12px",
      outline: "none",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "14px",
      background: "black",
      color: "white",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "20px",
      marginTop: "10px",
      fontFamily: "Prata"
    },
    toggle: {
      marginTop: "18px",
      textAlign: "center",
      fontSize: "15px",
      color: "#555",
      cursor: "pointer",
    },
    highlight: {
      color: "blue",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.title}>
          {isLogin ? "Welcome Back " : "Create Account "}
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              style={styles.input}
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />
          )}

          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <button style={styles.button}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div
          style={styles.toggle}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <span style={styles.highlight}>Sign up</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span style={styles.highlight}>Login</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;