import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Signup = () => {
  return (
    <>
      <Header />
      <div className="login-page">
  <div className="form">
    <form className="login-form">
      <input type="text" placeholder="username"/>
      <input type="text" placeholder="Gmail"/>
      <input type="password" placeholder="password"/>
      <button>Signup</button>
    </form>
  </div>
</div>
      <Footer />
    </>
  );
};

export default Signup;
