import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ResetPassword from "./pages/auth/ResetPassward";
import ForgotPassword from "./pages/auth/ForgetPassword";
import VerifyCode from "./pages/auth/verifyCode";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/reset-passward" element={<ForgotPassword/>}></Route>
            <Route path="/verify-code" element={<VerifyCode/>}></Route>
            <Route path="/update-password" element={<ResetPassword/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
