// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3j2i15ef7QuxCuEC6YOvJfyV3DuMbLp8",
  authDomain: "m3rcantile-8f10b.firebaseapp.com",
  projectId: "m3rcantile-8f10b",
  storageBucket: "m3rcantile-8f10b.appspot.com",
  messagingSenderId: "1066079081332",
  appId: "1:1066079081332:web:4085119d62588e916b5221"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//instantiate providers 

const provider = new GoogleAuthProvider();

//get current auth instance
export const auth = getAuth();


//set up auth functions
export function login(){
    return signInWithPopup(auth, provider);
}
export function logout(){
    return signOut(auth)
}
