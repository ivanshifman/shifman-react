import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPexwJYYaVQnUBDcfjyy_gH4FXGar3Dok",
  authDomain: "shifman-react.firebaseapp.com",
  projectId: "shifman-react",
  storageBucket: "shifman-react.appspot.com",
  messagingSenderId: "557497014874",
  appId: "1:557497014874:web:aeb533a4b026a7ec089663",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
