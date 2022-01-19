function login(){
  var email = document.getElementById('uname').value;
  var password = document.getElementById('pass').value;
  auth.signInWithEmailAndPassword(email, password).catch(function(error){
    var errorMessage = error.message;
    console.log('Errore sign in, ', errorMessage);
    alert(errorMessage);
  }).then(function(){
    if (auth.currentUser.displayName){
      window.location.replace("../index.html");
    } else {
      window.location.replace("../pages/HomePageAmministratore.html");
    }
  });
}

function logout(){
  auth.signOut().then(function(){
    window.location.replace("./index.html");
  }).catch(function(error){
    console.log('Errore logout, ', error.message);
  });
}

function registrazione(){
  var email = document.getElementById('formEmail').value;
  var password = document.getElementById('formPass').value;
  auth.createUserWithEmailAndPassword(email, password)
  .then(function(result) {
  return result.user.updateProfile({
    displayName: document.getElementById("formUserName").value
  });
  }).then(() => {
    window.location.replace("../index.html");
  })
  .catch(function(error) {
    console.log(error);
  });
}