import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA6R1ZF2-4r2cWoE1siOWy90QmFQaULLCs",
    authDomain: "diaries-app-a0136.firebaseapp.com",
    projectId: "diaries-app-a0136",
    storageBucket: "diaries-app-a0136.appspot.com",
    messagingSenderId: "611392829820",
    appId: "1:611392829820:web:7e16ebdd2b86ab04374cf9",
    measurementId: "G-YZZ5MVNKZD"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;