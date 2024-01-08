import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAzfQ4Rp6XXHsURSORVCCZeRf6t_db8J4s",
  authDomain: "music-73b38.firebaseapp.com",
  projectId: "music-73b38",
  storageBucket: "music-73b38.appspot.com",
  appId: "1:3266333857:web:5f386ecda5f62a659474e0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
