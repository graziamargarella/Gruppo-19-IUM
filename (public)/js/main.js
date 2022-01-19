// Fumetto per Registrazione/Login

const loadTippy = document.getElementById('loadTippy()');
	tippy('#header-icon', {
  		content: loadTippy.innerHTML,
  		placement: 'left',
   		theme: 'light',
   		trigger: 'click',
   		interactive: true,
   		allowHTML: true,
		appendTo: document.body
});

// firebase init

const firebaseConfig = {
  apiKey: "AIzaSyCoo5glDwlGXvzOf1IWWO0Xocm-3U0xtFk",
  authDomain: "una-mano-al-mare.firebaseapp.com",
  projectId: "una-mano-al-mare",
  storageBucket: "una-mano-al-mare.appspot.com",
  messagingSenderId: "102040764052",
  appId: "1:102040764052:web:2e1da04f2438bc96313e81"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

firebase.auth().onAuthStateChanged((user) => {
	try{
		document.getElementById("hello").innerHTML = "Ciao " + user.displayName + ", bentornato su Una Mano al Mare";
	} catch (error){
		console.log('no hello');
	}
});