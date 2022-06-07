var firebaseConfig = {
    apiKey: "AIzaSyD4yAmKA2-lJApGBIjSTwYi0bCpT2YSH6Y",
    authDomain: "kwitter-project-b9f5b.firebaseapp.com",
    databaseURL: "https://kwitter-project-b9f5b-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-b9f5b",
    storageBucket: "kwitter-project-b9f5b.appspot.com",
    messagingSenderId: "402562846170",
    appId: "1:402562846170:web:3757bd346b73eb72a284e3"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("username").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>"
                document.getElementById("output").innerHTML += row;
            });
        });
}
getData();
function redirectToRoomName(name) {
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}