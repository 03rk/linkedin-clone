
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBdLhz4SbpXPGdpgVueskjXnrv6CcEed9I",
    authDomain: "linkedin-clone-8c36a.firebaseapp.com",
    projectId: "linkedin-clone-8c36a",
    storageBucket: "linkedin-clone-8c36a.appspot.com",
    messagingSenderId: "266723262287",
    appId: "1:266723262287:web:54dfa397a3f67fad99cf3a"
  };

  // special line of code here connects everything
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  // gets the firestore database

  const db = firebaseApp.firestore();

  // We want to use firebase Authenticaton 

  const auth = firebase.auth();

  export {db,auth}