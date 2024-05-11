import Headers from "./components/Headers";
import Home from "./components/Home";
import CartDetails from "./components/CartDetails";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Sucess from "./components/Sucess";
import Cancell from "./components/Cancell";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />
        <Route path="/sucess" element={<Sucess />} />
        <Route path="/cancel" element={<Cancell />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
