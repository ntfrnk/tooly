import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsUNrtOFEYEYf_Pvger7T7yFgpv9U3T6U",
  authDomain: "tooly-react.firebaseapp.com",
  projectId: "tooly-react",
  storageBucket: "tooly-react.appspot.com",
  messagingSenderId: "172586503429",
  appId: "1:172586503429:web:031befd08274911445fb6c"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);