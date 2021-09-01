import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import googleIcon from '../../images/logo/google.svg';

const Login = () => {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const { login, signWithGoogle, setIsNavigate } = useAuth();
	const emailRef = useRef();
	const passwordRef = useRef();

	// react router dom path detect and go there
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: '/' } };

	// navigation changer
	useEffect(() => {
		setIsNavigate(true);
	});

	// sign with email and password
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setError('');
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.replace(from);
		} catch (err) {
			setError(err.message);
		}
		setLoading(false);
	};

	// sign with google
	const handleGoogleSignup = async () => {
		try {
			setError('');
			setLoading(true);
			await signWithGoogle();
			history.replace(from);
		} catch (err) {
			setError(err.message);
		}
		setLoading(false);
	};

	return (
		<div className='flex justify-center my-14'>
			<div className='border-2 border-gray-200 rounded-md shadow mx-2 w-full max-w-md p-4'>
				<h2 className='text-2xl text-primary font-semibold text-center py-4'>
					Login
				</h2>
				<div className='text-red-500 font-semibold text-md text-center pb-2'>
					{error}
				</div>
				<form onSubmit={handleSubmit}>
					<input
						type='email'
						ref={emailRef}
						placeholder='Enter your email'
						className='text-md form-control'
						required
					/>
					<input
						type='password'
						ref={passwordRef}
						placeholder='Password'
						className='text-md form-control'
						required
					/>
					<input
						type='submit'
						disabled={loading}
						value='Login'
						className='sign-btn'
					/>
				</form>

				{/* google sign button*/}
				<div className='flex justify-center my-4'>
					<button
						onClick={handleGoogleSignup}
						className='border py-2 px-8 rounded-full shadow'
					>
						<img
							className='w-8 inline-block mr-2'
							src={googleIcon}
							alt='google'
						/>
						<span>Continue with google</span>
					</button>
				</div>

				<div className='flex justify-evenly'>
					<span>Need and account?</span>
					<Link to='/signup'>
						<span className='text-purple-500 hover:text-purple-700 hover:underline'>
							Sign Up
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
