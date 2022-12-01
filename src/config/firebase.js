import  firebase from "firebase"
import 'firebase/storage';
 
const firebaseConfig = {
  apiKey: "AIzaSyD57E0UAZf4j84mOBImZRWi5ha4V2nZzoU",
  authDomain: "task-33875.firebaseapp.com",
  projectId: "task-33875",
  storageBucket: "task-33875.appspot.com",
  messagingSenderId: "103139279046",
  appId: "1:103139279046:web:cb5702572a68c6fdf617c7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database