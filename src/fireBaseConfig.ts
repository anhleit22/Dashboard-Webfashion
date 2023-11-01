import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


export const firebaseConfig = {
  apiKey: "AIzaSyCjdWfxhKcwQZ_EokJkxrpcs9VTyV9ws98",
  authDomain: "my-react-app-dash-board.firebaseapp.com",
  projectId: "my-react-app-dash-board",
  storageBucket: "my-react-app-dash-board.appspot.com",
  messagingSenderId: "381180000358",
  appId: "1:381180000358:web:64dbef9b52657e28bed5a7",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
