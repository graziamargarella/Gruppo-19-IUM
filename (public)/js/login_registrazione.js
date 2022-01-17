function login(){
  var email = document.getElementById('uname').value;
  var password = document.getElementById('pass').value;
  console.log(email);
  auth.signInWithEmailAndPassword(email, password).catch(function(error){
    var errorMessage = error.message;
    console.log('Errore sign in, ', errorMessage);
    alert(errorMessage);
  }).then(function(user){
    if (user){
      window.location.replace("../index.html");
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