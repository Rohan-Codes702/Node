import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Signup() {
  const navigate = useNavigate(); 

  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  // Handle form submit
  const handleSignup = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!signupInfo.name || !signupInfo.email || !signupInfo.password) {
      toast.error("Please fill all fields!");
      return;
    }

    try {
      const url = "http://localhost:5000/api/auth/signup";
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupInfo)
      });

      if (!response.ok) {
        const text = await response.text(); 
        console.error("Server error:", text);
        toast.error("Signup failed! Check server.");
        return;
      }

      const data = await response.json();
      console.log("Signup successful:", data);

      toast.success("Signup successful! Please login.");
      navigate('/login'); // redirect to login page after signup

    } catch (err) {
      console.error("Signup failed:", err);
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={signupInfo.name}
            onChange={handleChange}
            autoFocus
            placeholder="Enter Your Name.."
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={signupInfo.email}
            onChange={handleChange}
            placeholder="Enter Your Email.."
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={signupInfo.password}
            onChange={handleChange}
            placeholder="Enter Your Password.."
          />
        </div>

        <button type="submit">Signup</button>

        <span>Already have an account? </span>
        <Link to="/login">Login</Link>
      </form>

      <ToastContainer />
    </div>
  );
}

export default Signup;
