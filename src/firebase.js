import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    
  apiKey: "AIzaSyD_o3Pg31_tv7roQe3Zp4HcZ_HlbJ3Zao4",
  authDomain: "clone-237a3.firebaseapp.com",
  databaseURL: "https://clone-237a3.firebaseio.com",
  projectId: "clone-237a3",
  storageBucket: "clone-237a3.appspot.com",
  messagingSenderId: "31557545901",
  appId: "1:31557545901:web:984127e1d6c4ed8d057b24",
  measurementId: "G-RE5RWW2T37"


});
  

const auth = firebase.auth();

export { auth };