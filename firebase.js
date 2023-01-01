// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  Timestamp,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY, // "AIzaSyCPJGkql4YXVMptNBtTExolBzncb8M8ylQ",
  authDomain: "phillippargmann-6687b.firebaseapp.com",
  projectId: "phillippargmann-6687b",
  storageBucket: "phillippargmann-6687b.appspot.com",
  messagingSenderId: "48622841695",
  appId: "1:48622841695:web:202590c6947a143b27d0ea",
  measurementId: "G-9W23GMHNJQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// FORM SUBMISSION HANDLING
const db = getFirestore(app);

export const getAllFormSubmissions = async () => {
  const querySnapshot = await getDocs(collection(db, "submissions"));

  const res = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    res.push(doc.data());
  });
  return res;
};

export const addFormSubmission = (
  name = "Did not give his name",
  email = "no email available",
  message = "Nothing written"
) => {
  const docRef = addDoc(collection(db, "submissions"), {
    to: "pargmann92@gmail.com",
    message: {
      subject: `Form Submission from ${name}!, ${email}`,
      html: `${message}`,
    },
    email: email,
    name: name,
    date: Timestamp.now(),
  })
    .then((docRef) => {
      console.log("Document has been added successfully");
    })
    .catch((error) => {
      console.log(error);
    });

  return docRef.id;
};
