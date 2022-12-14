import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { auth, provider } from "../firebase.js";

const AuthContext = createContext();

// can call it from any components and get values
export const useAuth = () => {
	return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(false);
	const [isNavigate, setIsNavigate] = useState(false);

	// google sign in method
	const signWithGoogle = () => {
		return auth.signInWithPopup(provider);
	};

	// sign up with sent email verification link

	const signup = async (email, password) => {
		const result = await auth.createUserWithEmailAndPassword(email, password);
		return await result.user.sendEmailVerification();
	};

	// login user method
	const login = (email, password) => {
		return auth.signInWithEmailAndPassword(email, password);
	};

	// logout user method
	const logout = () => {
		return auth.signOut();
	};

	// get user information after login
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(true);
		});
	});

	const value = {
		currentUser,
		signWithGoogle,
		signup,
		login,
		logout,
		isNavigate,
		setIsNavigate,
	};

	return (
		<AuthContext.Provider value={value}>
			{loading && children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
