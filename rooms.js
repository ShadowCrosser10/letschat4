// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {  
  apiKey: "AIzaSyB-hS_cqQF  pGg6idWCOeElRfXfmRBfB9e0",
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
document.getElementById("user_header").innerHTML = "Welcome "+username+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log(Room_names);
   row = "<div id="+Room_names+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>"; 
   document.getElementById("trendingroomsRN").innerHTML = row; 
   //End code
   });});}
getData();

function addroom() {
  room_name = document.getElementById("enterroom").value; 
  localStorage.setItem("Room name: ", room_name); 
  firebase.database().ref("/").child(room_name).update({
    Roomname: room_name
  }
  );

  window.location = "message.html"; 

}

function logout() {
    localStorage.removeItem("Room name: ");
    localStorage.removeItem("Username is; ");
    window.location = "index.html"; 
}


