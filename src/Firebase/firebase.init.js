import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const intializeAthentication=() =>  {
     initializeApp(firebaseConfig);
}
export default intializeAthentication;