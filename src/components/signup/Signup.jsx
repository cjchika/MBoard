import React from "react";

import './signup.css'

const Signup = () => {
  return (
    <div className="mboard__signup">
			<h3>Hey, Enter your details to sign in to your account.</h3>
      <div className="mboard__signup-form">
				<form>
					<label htmlFor="email" /> 
					<input placeholder="Enter email" type="email" />

					<label htmlFor="password" /> 
					<input placeholder="Enter password" type="password" />

					<button type="button">Sign in</button>
				</form>
				<p>Don't have an account yet? <strong><a href="google.com">Sign up</a></strong></p>
			</div>
    </div>
  );
};

export default Signup;
