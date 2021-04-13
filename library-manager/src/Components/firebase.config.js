import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyCLUZOG5lDa1nF-X1l0qJp8NSMNuaUUrHI",
  authDomain: "library-manager-21.firebaseapp.com",
  projectId: "library-manager-21",
  storageBucket: "library-manager-21.appspot.com",
  messagingSenderId: "954395966012",
  appId: "1:954395966012:web:039a6f537a1da3885e2139",
  measurementId: "G-4HYVKNJYN2",
};

// firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();
