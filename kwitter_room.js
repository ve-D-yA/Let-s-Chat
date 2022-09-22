function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update
      ({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}

const firebaseConfig = { 
    apiKey: "AIzaSyATHzxrj9lleXT68OO5G9v5CU10t-ifLw4",
    authDomain: "letschat-fd180.firebaseapp.com",
    projectId: "letschat-fd180",
    storageBucket: "letschat-fd180.appspot.com",
    messagingSenderId: "876501043023",
    appId: "1:876501043023:web:746d6f356c60874632273a" 
  };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

     console.log("room name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;

    //End code
    });});}
getData();