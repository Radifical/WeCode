

var firebaseConfig = {
 apiKey: "AIzaSyBVK8AjaX2U9Y_93oX6nOok-vBs0HWjZr4",
 authDomain: "login-demo-254f7.firebaseapp.com",
 projectId: "login-demo-254f7",
 storageBucket: "login-demo-254f7.appspot.com",
 messagingSenderId: "228883805517",
 appId: "1:228883805517:web:db9063121d6bf3a79ab304",
 measurementId: "G-C8Q2HYKHY1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var auth = firebase.auth();

var email = undefined;
var user = undefined;
//signup function
function signUp() {
 var user = document.getElementById("name")
 var email = document.getElementById("email");
 var password = document.getElementById("password");
 
 const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
 
 
 promise.catch(e => alert(e.message));

 
promise.then(() => {
 userData = firebase.auth().currentUser;
 var user = {
 
          "uid": userData.uid,
           "name": document.getElementById("name").value,
           "email": userData.email
          
       }
       console.log(user.name + " username");
       console.log(userData.email + " email")
       writeUserData(user);
 
 alert("SignUp Successfully"); window.location.href = 'login.html'; });

}
 
function writeUserData(user) {
      firebase.database().ref('users/' + user.uid).set(user).catch(error => {
        console.log(error.message)
    });
}

//signIN function
function signIn() {
 var email = document.getElementById("email");
 var password = document.getElementById("password");
 const promise = auth.signInWithEmailAndPassword(email.value, password.value);
 
 
 promise.catch(e => alert(e.message)); promise.then(() => { window.location.replace("home.html"); });
 
// firebase.auth().onAuthStateChanged(user => {
// if(user) {
 //  console.log("redirecting");
 //  window.location = 'home.html'; //After successful login, user will be redirected to home.html
// }
 
// else{
  // console.log("not redirecting");
 //  window.location = 'index.html';
// }
//});
 
 
}
 
 
 function forgotPass(){
   firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

 }
 
 
//signOut
 
function signOut() {
 auth.signOut();
 alert("SignOut Successfully from System");
 window.location.href = 'index.html';
}
 
//active user to homepage
firebase.auth().onAuthStateChanged((user) => {
 if (user) {
  email = user.email;

   //alert("Active user " + email);
 
  firebase.database().ref('users/' + user.uid).once("value", snap => {
        localStorage.setItem('displayname', snap.val().name);
        console.log(snap.val());
   });

 } else {
 localStorage.clear;
 }
})
 

// Retrive event documents
// function getEvents(){
// console.log("Something")
//  var eventsRef = db.collection("events");
//  eventsRef.get("3eiV2sB6984RsMQkysBV").then((doc) => {
//     // Document was found in the cache. If no cached document exists,
//     // an error will be returned to the 'catch' block below.
//     console.log("Cached document data:", doc.data());
// }).catch((error) => {
//     console.log("Error getting cached document:", error);
// });
// }


// $(document).ready(function(){

//   function appendEvents(element){
//     $('#events_container').append(element)
//   }

// });



//export {email,user,signIn,signOut};

