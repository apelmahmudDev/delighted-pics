import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import googleIcon from '../../images/logo/google.svg';

const Signup = () => {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const { signup } = useAuth();
	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();

	return (
		<div className='h-screen flex justify-center items-center'>
			<div className='border-2 border-gray-200 rounded-md mx-2 w-full max-w-md p-4'>
				<h2 className='text-2xl text-primary font-semibold text-center py-4'>
					Create an account
				</h2>
				{/* <div>{error}</div> */}
				<form>
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
					<input type='submit' value='Signup' className='sign-btn' />
				</form>

				{/* google sign button*/}
				<div className='flex justify-center my-4'>
					<button className='border py-2 px-8 rounded-full shadow'>
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
