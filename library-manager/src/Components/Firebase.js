import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCLUZOG5lDa1nF-X1l0qJp8NSMNuaUUrHI",
  authDomain: "library-manager-21.firebaseapp.com",
  projectId: "library-manager-21",
  storageBucket: "library-manager-21.appspot.com",
  messagingSenderId: "954395966012",
  appId: "1:954395966012:web:039a6f537a1da3885e2139",
  measurementId: "G-4HYVKNJYN2",
};

// firebaseConfig 정보로 firebase 시작
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const { email, password } = firebase.auth();
auth
  .setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    //var errorCode = error.code;
    //var errorMessage = error.message;
  });

export { auth, provider };
export default db;
