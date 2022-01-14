import firebase from "firebase/app";
import "firebase/auth";

function signInWithEmailPassword() {
  var email = "test@example.com";
  var password = "hunter2";
  
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
        var user = userCredential.user;
        // redirect a homepage (invia alert successo)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // inserire alert login errore
    });
}

function signUpWithEmailPassword() {
  var email = "test@example.com";
  var password = "hunter2";
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
        // redirect a homepage (invia alert successo)

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    // inserire alert registrazione errore
    });
}