import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import googleIcon from '../../images/logo/google.svg';

const Signup = () => {
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const { signup, signWithGoogle, setIsNavigate } = useAuth();
	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();

	// navigation changer
	useEffect(() => {
		setIsNavigate(true);
	});

	// sign with email and password
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (passwordRef.current.value !== confirmPasswordRef.current.value) {
			return setError('Password do not match!');
		}
		try {
			setError('');
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			setMessage('Please check your inbox to verified your email address.');
			// history.push("/login");
		} catch (err) {
			setMessage('');
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
		} catch (err) {
			setError(err.message);
		}
		setLoading(false);
	};

	return (
		<div className='flex justify-center my-14'>
			<div className='border-2 border-gray-200 rounded-md shadow mx-2 w-full max-w-md p-4'>
				<h2 className='text-2xl text-primary font-semibold text-center py-4'>
					Create an account
				</h2>
				<div className='text-red-500 font-semibold text-md text-center pb-2'>
					{error}
				</div>

				{!error && message && (
					<div className='text-green-500 font-semibold text-md text-center pb-2'>
						{message}
					</div>
				)}

				<form onSubmit={handleSubmit}>
					<input
						type='text'
						ref={nameRef}
						placeholder='Enter your name'
						className='text-md form-control'
						required
					/>
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
						type='password'
						ref={confirmPasswordRef}
						placeholder='Confirm password'
						className='text-md form-control'
						required
					/>
					<input
						type='submit'
						disabled={loading}
						value={loading ? 'Loading...' : 'Sign up'}
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
					<span>Already have an account?</span>
					<Link to='/login'>
						<span className='text-purple-500 hover:text-purple-700 hover:underline'>
							Login
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Signup;
