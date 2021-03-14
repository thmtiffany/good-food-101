import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4joA3kIU7DF10Lpr9BoB78qOzfXQ_quY",
  authDomain: "bt3103-week-6-aba8b.firebaseapp.com",
  projectId: "bt3103-week-6-aba8b",
  storageBucket: "bt3103-week-6-aba8b.appspot.com",
  messagingSenderId: "775052862884",
  appId: "1:775052862884:web:f5d3ed9bbf37e41ae54d31",
  measurementId: "G-2XXBXFH4QQ"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;
