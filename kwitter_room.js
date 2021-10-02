// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWSLrDLZP1Zo6VQ7XuQDPPEw_LiOJHx-Y",
  authDomain: "kwitter-42fac.firebaseapp.com",
  databaseURL: "https://kwitter-42fac-default-rtdb.firebaseio.com",
  projectId: "kwitter-42fac",
  storageBucket: "kwitter-42fac.appspot.com",
  messagingSenderId: "108677029681",
  appId: "1:108677029681:web:17597175b78d47030cda10"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("UserName");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("UserName");
  localStorage.removeItem("room_name");
    window.location="index.html";
}