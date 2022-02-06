import {useState, useEffect} from 'react'
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";

import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        setIsLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
          });
          return unsubscribe;
    }, []);

    const registerUser = (name, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = {displayName: name, email};
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                      setAuthError('');
                  }).catch((error) => {
                      setAuthError(error.message)
                  });
                  history.replace('/');
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() =>setIsLoading(false));
    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const destination = location?.state?.from || '/'
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() =>setIsLoading(false));
    }

    const googleSignIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() =>setIsLoading(false));
    }

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setAuthError('');
          }).catch((error) => {
              setAuthError(error.message);
          }).finally(() =>setIsLoading(false));
    }
    return {
        user,
        authError,
        isLoading,
        registerUser,
        loginUser,
        googleSignIn,
        logout
    };
};

export default useFirebase;