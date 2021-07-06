import Firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDE_bn_ant7wAhbkLNY6Z8g9yyUrL8YlC8",
    authDomain: "gaitbox-12dd9.firebaseapp.com",
    databaseURL: "https://gaitbox-12dd9-default-rtdb.firebaseio.com",
    projectId: "gaitbox-12dd9",
    storageBucket: "gaitbox-12dd9.appspot.com",
    messagingSenderId: "814675876817",
    appId: "1:814675876817:web:b9361e4a56b13a443b5ef0",
    measurementId: "G-WNNT1L001F"
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();