import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAztOCLcTAFAVXEea5KhuhecOou4ZjMqdc",
  authDomain: "react-firbase-21463.firebaseapp.com",
  projectId: "react-firbase-21463",
  storageBucket: "react-firbase-21463.appspot.com",
  messagingSenderId: "87775473682",
  appId: "1:87775473682:web:47dfd1138e240e3103e8cb",
  measurementId: "G-GQ74DRSPFH"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);