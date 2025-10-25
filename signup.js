// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";


  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAdPRBEwtm7kMozj1Uv0-nzFdFYcGdyxLg",
    authDomain: "reloginsign.firebaseapp.com",
    projectId: "reloginsign",
    storageBucket: "reloginsign.firebasestorage.app",
    messagingSenderId: "576160231769",
    appId: "1:576160231769:web:443694913e06a10b5d5c48",
    measurementId: "G-G8RP59BMFY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  //const analytics = getAnalytics(app);

  const submit = document.getElementById('submit');
  submit.addEventListener("click", function (event) {
    event.preventDefault()

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        alert("Creating Account...")
        window.location.href = "index.html"
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    });
    alert("Signup Initiallize !")
  }); 
