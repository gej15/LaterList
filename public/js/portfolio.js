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
    let user =  JSON.parse(localStorage.getItem('user'))
    // console.log(user)
    // console.log(user.email)
    let email = ({
        name: user.email
    })
    let userId 

    $.get("/api/user", function(data){
       
        let currentUserValid = false
        for (let i = 0; i < data.length; i++){
            console.log(data)
            console.log(data.length)
            console.log(data[i].name)
            console.log(email.name)
            if (data[i].name === email.name ){
                currentUserValid = true
            } else {
                console.log('no')
            }
            if (!currentUserValid) {
                console.log("new user")
                addUser()
            } else {
                console.log('already a user')
                userId = data[i].id
                console.log(userId)

                let item = ({
                    catagory: "podcast",
                    title:  "akward turtles",
                    itemId: "j256asig23rf",
                    UserId: userId,
                })
            
            
                function addAnItem(){
                    $.post("/api/newItem", item)
                    .then(function(item){
                        console.log(item)
                    })
                }
                addAnItem()
            }
        }
        
        function addUser() {
            $.post("/api/new", email)
            .then(function(email) {
                // Log the data we found
            console.log(email);
            })
        }
    })

    // let item = ({
    //     catagory: "podcast",
    //     title:  "akward turtles",
    //     itemId: "j256asig23rf",
    //     UserId: userId,
    // })


    // function addAnItem(){
    //     $.post("/api/newItem", item)
    //     .then(function(item){
    //         console.log(item)
    //     })
    // }
    // addAnItem()
})  