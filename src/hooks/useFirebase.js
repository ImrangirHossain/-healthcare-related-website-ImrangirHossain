import { getAuth, signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword,createUserWithEmailAndPassword, updateProfile, onAuthStateChanged , signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import intializeAthentication from "../Firebase/firebase.init";

intializeAthentication();

const useFirebase = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
      setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };
    const handleNameChange = e => {
        setName(e.target.value);
      }
    const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
      }
    const handleRegistration = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        setUserName();
        setUser(user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
     } 

     const handleLogin = e =>{
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        setUser(user)
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
     }
      const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
      }
      useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut =() =>{
      setIsLoading(true);
      signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(() => setIsLoading(false));
    }

    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleLogin,
        logOut
    };

}
export default useFirebase;