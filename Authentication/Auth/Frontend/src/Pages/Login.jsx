import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginInfo.email || !loginInfo.password) {
      toast.error("Please fill all fields!");
      return;
    }

    try {
      const url = "http://localhost:3000/api/auth/login"; 
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginInfo)
      });

      if (!response.ok) {
        const text = await response.text();
        toast.error("Login failed! Check credentials.");
        console.error(text);
        return;
      }

      const data = await response.json();
      console.log("Login successful:", data);
      toast.success("Login successful!");
      navigate('/home'); // redirect to home page after login

    } catch (err) {
      console.error("Login error:", err);
      toast.error("Login failed. Try again.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
            placeholder="Enter your Email"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            placeholder="Enter your Password"
          />
        </div>

        <button type="submit">Login</button>

        <span>Don't have an account? </span>
        <Link to="/signup">Signup</Link>
      </form>

      <ToastContainer />
    </div>
  );
}

export default Login;
