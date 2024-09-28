import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../Config/firebase/firebaseconfig';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ component }) => {
    const [isUser, setIsUser] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsUser(true);
            } else {
                navigate('/login'); // Redirect to login if not authenticated
            }
        });

        // Clean up the subscription on component unmount
        return () => unsubscribe();
    }, [navigate]);

    return isUser ? component : <h1>Loading...</h1>; // Return loading or component based on auth state
};

export default ProtectedRoutes;
