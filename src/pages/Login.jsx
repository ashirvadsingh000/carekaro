import React from "react";
import '../assets/css/pagesCss/login.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
const Login = () => {
  return (
    <>
    <Header/>
     <div className="login-page">
  <div className="form">
    <form className="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p className="message" style={{cursor:"pointer"}}>Reset password? </p>
    </form>
  </div>
</div>
<Footer/>
    </>
  );
};

export default Login;
