// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxi3uGwP7A8F1CHh98JtnHK3lBUMx9zkg",
    authDomain: "kwitter-6f15a.firebaseapp.com",
    databaseURL: "https://kwitter-6f15a-default-rtdb.firebaseio.com",
    projectId: "kwitter-6f15a",
    storageBucket: "kwitter-6f15a.appspot.com",
    messagingSenderId: "781870639540",
    appId: "1:781870639540:web:4fb62b41a9501d31d12ae1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");
  document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

  function addroom() {
         room_name = document.getElementById("room_name").value;

        localStorage.setItem("Roomname",room_name);
    
        window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  //End code
  });});}
getData();
