import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Signup = () => {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const { signup } = useAuth();
	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();

	return (
		<div>
			<h2>Create an account</h2>
			{/* <div>{error}</div> */}
			<form>
				<input type='text' ref={nameRef} placeholder='Enter your name' />
				<input type='email' ref={emailRef} placeholder='Enter your email' />
				<input type='password' ref={passwordRef} placeholder='Password' />
				<input
					type='password'
					ref={confirmPasswordRef}
					placeholder='Confirm password'
				/>
				<input type='submit' value='Signup' />
			</form>
			<div>
				<span>Already have an account?</span>
				<Link to='/login'>Login</Link>
			</div>
		</div>
	);
};

export default Signup;
