// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ResetPassword from "./pages/auth/ResetPassward";
import ForgotPassword from "./pages/auth/ForgetPassword";
import VerifyCode from "./pages/auth/verifyCode";
import Pricing from "./pages/Pricing";
import Navbar from "./components/Layout/Navbar";
import FooterSection from "./components/Layout/FooterSection";
import Blog from "./pages/Blog";
import ChatBot from "./pages/ChatBot";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="pricing" element={<Pricing />} />
        <Route path="blog" element={<Blog />} />
        <Route path="chatbot" element={<ChatBot />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="reset-password" element={<ForgotPassword />} />
        <Route path="verify-code" element={<VerifyCode />} />
        <Route path="update-password" element={<ResetPassword />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
