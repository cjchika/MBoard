import React, { useRef } from "react";

import './signup.css'

const Signup = () => {
	const emailVal = useRef();
	const passwordVal = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

	
		let emailInputVal = emailVal.current.value;
		let passwordInputVal = passwordVal.current.value;

		emailVal.current.value = '';
		passwordVal.current.value = '';

		if (!emailInputVal.includes('@') || passwordInputVal.length <= 4) {
			return;
		}

		console.log(emailInputVal);
		console.log(passwordInputVal);

	}

  return (
    <div className="mboard__signup">
			<h3>Hey, Enter your details to sign in to your account.</h3>
      <div className="mboard__signup-form">
				<form onSubmit={submitHandler}>
					<label htmlFor="email" /> 
					<input placeholder="Enter email" type="email" ref={emailVal}/>

					<label htmlFor="password" /> 
					<input placeholder="Enter password" type="password" ref={passwordVal}/>

					<button type="button" onClick={submitHandler}>Login </button>
				</form>
				<p>Don't have an account yet? <strong><a href="google.com">Sign up</a></strong></p>
			</div>
    </div>
  );
};

export default Signup;
