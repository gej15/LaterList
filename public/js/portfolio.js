// import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants"

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
            console.log(data)
            for (let i = 0; i < data.length; i++){
                console.log(data[i].itemId)
                let queryUrl =  'https://itunes.apple.com/lookup?id=' + data[i].itemId
                
                $.ajax({
                    url: queryUrl,
                    method: "GET",
                    // The name of the callback parameter
                    jsonp: "callback",
        
                    // Tell jQuery we're expecting JSONP
                    dataType: "jsonp",
                    // Work with the response
                    success: function (response) {
                    console.log(response);
                    

                    const cardDiv = $("<div class= 'cardDiv'>")
                    const movieDiv = $("<div class='cardImg'>");
                    const movieDiv2 = $("<div class='cardText'>")
                    const artwork = response.results[0].artworkUrl600;
                    const pOne = $("<img>").attr({
                        src: artwork,
                        class: "displayPic",

                    });
                    movieDiv.append(pOne);
                    //             //   ------------------------------------------
                    const id = response.results[0].trackId;
                    const pID = $("<p>").text("Id" + id);
                    movieDiv2.append(pID);

                    //   ---------------------------------------------
                    const save = $('<div>').attr({
                        id: "tt1",
                        class: "icon material-icons saveButton",
                        catagory: 'podcast',
                        title: response.results[0].collectionName,
                        itemId: response.results[0].trackId,
                        UserId: userId
                    })
                    $('.saveButton').text('add')
                    movieDiv2.append(save)


                    const name = response.results[0].collectionName;
                    const pTwo = $("<p>").text("Name: " + name);
                    movieDiv2.append(pTwo);
                    //   -----------------------------------------------
                    const artist = response.results[0].artistName;
                    const pThree = $("<p>").text("Artist: " + artist);
                    movieDiv2.append(pThree);
                    //   ------------------------------------------------
                    const kind = response.results[0].kind;
                    const pFour = $("<p>").text("Kind: " + kind);
                    movieDiv2.append(pFour);

                    $(cardDiv).append(movieDiv);
                    $(cardDiv).append(movieDiv2)
                    $('#box').append(cardDiv)
                
                
                
                    }
                })
            }
        })
    }
        




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
    //   }


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