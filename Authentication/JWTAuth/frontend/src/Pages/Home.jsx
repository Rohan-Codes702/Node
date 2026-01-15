import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:5000/home", {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Unauthorized");
        }
        return res.json();
      })
      .then(data => {
        console.log("Home data:", data);
      })
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });

  }, [navigate]); // ✅ FIX 2

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default Home;
