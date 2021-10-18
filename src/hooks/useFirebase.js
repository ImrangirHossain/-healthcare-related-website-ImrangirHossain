import { getAuth, signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword,createUserWithEmailAndPassword, updateProfile , signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import intializeAthentication from "../Firebase/firebase.init";

intializeAthentication();

const useFirebase = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
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
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        setUserName();
      })
      .catch(error => {
        setError(error.message);
      })
     } 

     const handleLogin = e =>{
      e.preventDefault();
      console.log(email,password);
      signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
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

    const logOut =() =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    return {
        user,
        error,
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