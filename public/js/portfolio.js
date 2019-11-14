$(document).ready(function() {
    
    console.log("start")
    let user = JSON.parse(localStorage.getItem('user'))
    // console.log(user)
    // console.log(user.email)
    console.log(user)

    if (!user) {
        console.log('no user')
        $('#signout').css('display', 'none')
        $('#myList').css('display', 'none')

    } else {
        console.log('there is a user')
        $('#welcome').text('Welcome ' + user.displayName )
        $('#login').css('display', 'none')
        validateUser()
    }

    $('#signout').on('click', function(){
        localStorage.setItem('user', JSON.stringify(''))
        location.href = '/search'
    })

    let email = ({
        name: user.email
    })
    let userId = "gej15@yahoo.com"
    
    function validateUser() {
        $.get("/api/user", function(data){
            console.log(data.length)
            console.log(data)
            let currentUserValid = false
            if (data.length === 0) {
                addUser()
            } else {
                for (let i = 0; i < data.length; i++){
                    console.log(data)
                    console.log(data.length)
                    console.log(data[i].name)
                    console.log(email.name)
                    if (data[i].name === email.name ) {
                        currentUserValid = true
                        userId = data[i].id    
                    } else {
                        console.log('no')
                    }
                }
                if (!currentUserValid) {
                    console.log("new user")
                    addUser()
                } else {
                    console.log('already a user')
                    console.log(userId)  
                    getItems()
                }
            }
        })
    }

   
    function getItems() {
        console.log(userId)
        UserId = userId || "";
        console.log(UserId)
        
        $.get("/api/podcast", function(data){
            res.JSON(data)
        })
        // if (UserId) {
        //   UserId = "/?UserId=" + userId;
        // }
        // $.get("/api/podcast" + UserId, function(data) {
        //   console.log("Posts", data);
        //   pods = data;
        //   if (!posts || !posts.length) {
        //     displayEmpty(UserId);
        //   }
        //   else {
        //     console.log(pods)
        //   }
        // });
      }


    // let item = ({
    //     catagory: "podcast",
    //     title:  "akward turtles",
    //     itemId: "j256asig23rf",
    //     UserId: 1,
    // })

    // function addAnItem(){
    //     $.post("/api/newItem", item)
    //     .then(function(item){
    //         console.log(item)
    //     })
    // }
    // addAnItem()

    function addUser() {
        $.post("/api/new", email)
        .then(function(email) {
            // Log the data we found
        console.log(email);
        })
    }
})  