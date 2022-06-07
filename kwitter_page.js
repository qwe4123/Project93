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
room_name = localStorage.getItem("room_name");
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        likes:0
    });
    document.getElementById("msg").value = "";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}