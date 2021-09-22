const config = {
    apiKey: "AIzaSyA64P1KgR7MWC1W7_7JEUTktNeX2u_7I6o",
    authDomain: "chit-chat-4b20f.firebaseapp.com",
    databaseURL: "https://chit-chat-4b20f-default-rtdb.firebaseio.com",
    projectId: "chit-chat-4b20f",
    storageBucket: "chit-chat-4b20f.appspot.com",
    messagingSenderId: "221951867501",
    appId: "1:221951867501:web:3a18de435a3c890d341d64",
  };
  firebase.initializeApp(config);
  user_name = localStorage.getItem("Username");
  roomname = localStorage.getItem("Room Name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name;
      function addRoom() {
        room_name = document.getElementById("roomname").value;
        firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
        });
        localStorage.setItem("Room Name", room_name);
        window.location = "chitchatpage.html";
    }
    
      function getData() {
          firebase.database().ref("/").on('value', function(snapshot)
          {document.getElementById("output").innerHTML="";
          snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
            room_names = childKey;
           console.log("Room Name - "+ Room_names);
           row = "<div class='room_name' id="+room_names+" onclick='redirectToRoomName(this.id)'><hr>#"+room_names+"</div></hr>";
           document.getElementById("output").innerHTML+=row;
          });});}

  getData();
  function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("Room Name", name);
      window.location = "chitchatpage.html";
  }        

  function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Room Name");
    window.location.replace("index.html");
  }