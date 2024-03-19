import {initializeApp} from 'firebase/app'
import {getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider} from 'firebase/auth'

// INITIALIZEAPP is a way of telling firebase to connect the firebase app on our local machine to the one we built on the firebase console already
const firebaseConfig = {
    apiKey: "AIzaSyCyM1YRlyEGzyOWY1LUVWO-8CwvJl-RYtU",
    authDomain: "lumina-e02e3.firebaseapp.com",
    projectId: "lumina-e02e3",
    storageBucket: "lumina-e02e3.appspot.com",
    messagingSenderId: "53381315661",
    appId: "1:53381315661:web:03e3c0cae341ae240df004"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);

  const facebook_provider = new FacebookAuthProvider()
  const google_provider = new GoogleAuthProvider();
    google_provider.setCustomParameters({
  prompt: "select_account",
});

 
  export const auth = getAuth()
  export const signInWithFacebookPopup= () => signInWithPopup(auth,facebook_provider)
  export const signInWithGooglePopup = () => signInWithPopup(auth, google_provider)