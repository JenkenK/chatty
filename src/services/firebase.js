import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDGgz1cLAua0xlxqNLiwaxFdUH9E_cj_pc",
    authDomain: "chatty-e21a8.firebaseapp.com",
    databaseURL: "https://chatty-e21a8-default-rtdb.firebaseio.com/"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();