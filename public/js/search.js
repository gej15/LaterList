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

    let userId = ""
    let email = ({
        name: user.email
    })

 
    function callPodcast() {
        const podQueryURL = 'https://itunes.apple.com/search?term=' + search +'&entity=podcast&limit=5'
        $.ajax({
            url:  podQueryURL,
            method: "GET",
            // The name of the callback parameter
            jsonp: "callback",

            // Tell jQuery we're expecting JSONP
            dataType: "jsonp",
            // Work with the response
            success: function( response ) {
            console.log( response ); // server response
            }
        })
    }
    

    callPodcast()
    
    
   
    
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
                }
            }
        })
    }


//     let movie = $(this).val("#movie-input");
//         // let movie = $('#movie-form').val();
//         const queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=c21b2973";
//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         }).then(function(response) {
//             // console.log(response)
//             $("#search-movie").on("click", function(event){
//             console.log(movie)
//             event.preventDefault();
//             console.log("I work!")
//             console.log(response.Title)
//             const movieDiv = $("<div class='movie'>");
//             //   ------------------------------------------
//             const id = response.imdbID;
//             const pID = $("<p>").text("ID: " + id);
//             movieDiv.append(pID);
//             //   -----------------------------------------------
//             const rating = response.Rated;
//             const pOne = $("<p>").text("Rating: " + rating);
//             movieDiv.append(pOne);
//             //   ---------------------------------------------
//             const released = response.Released;
//             const pTwo = $("<p>").text("Released: " + released);
//             movieDiv.append(pTwo);
//             //   -----------------------------------------------
//             const plot = response.Plot;
//             const pThree = $("<p>").text("Plot: " + plot);
//             movieDiv.append(pThree);
//             //   ------------------------------------------------
//             const review = response.imdbRating;
//             const pFour = $("<p>").text("Score: " + review);
//             movieDiv.append(pFour);
//             //   ------------------------------------------------
//             const genre = response.Genre;
//             const pFive = $("<p>").text("Genre: " + genre);
//             movieDiv.append(pFive);
//             //   ------------------------------------------------
//             const imgURL = response.Poster;
//             const image = $("<img>").attr("src", imgURL);
//             movieDiv.append(image);
//             $("#movies-view").prepend(movieDiv);
//             });

})