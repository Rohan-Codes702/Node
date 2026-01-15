import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const[name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const navigate=useNavigate();

  const signup=async()=>{
    await fetch("http://localhost:5000/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,email,password})
    });
    navigate("/login");
  };

    return (
    <>
      <h2>Signup</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)}/>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={signup}>Signup</button>
    </>
  );

}

export default Signup;
