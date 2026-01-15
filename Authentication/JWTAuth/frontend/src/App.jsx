import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";


function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Signup></Signup>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/home" element={<Home></Home>}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App
