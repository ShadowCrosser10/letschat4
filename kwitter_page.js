// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB-hS_cqQFpGg6idWCOeElRfXfmRBfB9e0",
    authDomain: "kwitter-c38e1.firebaseapp.com",
    databaseURL: "https://kwitter-c38e1-default-rtdb.firebaseio.com",
    projectId: "kwitter-c38e1",
    storageBucket: "kwitter-c38e1.appspot.com",
    messagingSenderId: "559420852226",
    appId: "1:559420852226:web:d8665fd63d77c1db05bf1b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("Username is; "); 
room_name = localStorage.getItem("Room name: ");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout() {
    localStorage.removeItem("Room name: ");
    localStorage.removeItem("Username is; ");
    window.location = "index.html"; 
}

function send() {
    msg = document.getElementById("msg_input").value; 
    firebase.database().ref(room_name).push({
          Message: msg,
          Username: username,
          Likes: 0
    });

    document.getElementById("msg_input").value = ""; 
}
