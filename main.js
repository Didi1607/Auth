// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyArVR9f7nj8XpilM036DTTC2vnCGkvJKsU",
  authDomain: "auth-form-4538d.firebaseapp.com",
  projectId: "auth-form-4538d",
  storageBucket: "auth-form-4538d.appspot.com",
  messagingSenderId: "1009604282673",
  appId: "1:1009604282673:web:bf579f4ebe01533b518810"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}