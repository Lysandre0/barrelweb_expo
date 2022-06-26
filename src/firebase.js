// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCclH1QprdgbhURrGrpnjegGw2oEvSWS0U",
  authDomain: "barrelweb-expo.firebaseapp.com",
  projectId: "barrelweb-expo",
  storageBucket: "barrelweb-expo.appspot.com",
  messagingSenderId: "192435402697",
  appId: "1:192435402697:web:627802513c45f883725a18"
};

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth, app };