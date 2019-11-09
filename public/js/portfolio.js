$(document).ready(function() {
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCMYpMAbjntYhCyxjGlGlbEezOYhxP6HQQ",
      authDomain: "project2-b70da.firebaseapp.com",
      databaseURL: "https://project2-b70da.firebaseio.com",
      projectId: "project2-b70da",
      storageBucket: "project2-b70da.appspot.com",
      messagingSenderId: "494117517998",
      appId: "1:494117517998:web:0da2a85b81a6a310134b3f",
      measurementId: "G-SJ6H5B10ER"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    console.log("start")
    
    let user = JSON.parse(localStorage.getItem('firebaseui::rememberedAccounts'))

    console.log(user)
  
    
})  