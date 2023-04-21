var firebaseConfig = {
  
    apiKey: "AIzaSyDl99OcPWK29Nc1gQ2S1Op34N0ahLbbkbc",
    authDomain: "kwitter12345-b3aa8.firebaseapp.com",
    databaseURL: "https://kwitter12345-b3aa8-default-rtdb.firebaseio.com",
    projectId: "kwitter12345-b3aa8",
    storageBucket: "kwitter12345-b3aa8.appspot.com",
    messagingSenderId: "604084736260",
    appId: "1:604084736260:web:2a66f38c19add090974051"
  };
   
            firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
    
