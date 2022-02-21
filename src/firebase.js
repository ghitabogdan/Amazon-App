import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBz3CXyLfd-XFx-Olm1jayays-FDmrPNvA",
    authDomain: "clone-d83d8.firebaseapp.com",
    databaseURL: "https://clone-d83d8.firebaseio.com",
    projectId: "clone-d83d8",
    storageBucket: "clone-d83d8.appspot.com",
    messagingSenderId: "738037100664",
    appId: "1:738037100664:web:e07b84f14ce2d0c7fd7d8d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };