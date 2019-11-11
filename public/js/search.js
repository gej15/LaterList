let movie = $(this).val("#movie-input");
    // let movie = $('#movie-form').val();
    const queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=c21b2973";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // console.log(response)
        $("#search-movie").on("click", function(event){
        console.log(movie)
        event.preventDefault();
        console.log("I work!")
        console.log(response.Title)
        const movieDiv = $("<div class='movie'>");
        //   ------------------------------------------
          const id = response.imdbID;
          const pID = $("<p>").text("ID: " + id);
          movieDiv.append(pID);
        //   -----------------------------------------------
          const rating = response.Rated;
          const pOne = $("<p>").text("Rating: " + rating);
          movieDiv.append(pOne);
        //   ---------------------------------------------
          const released = response.Released;
          const pTwo = $("<p>").text("Released: " + released);
          movieDiv.append(pTwo);
        //   -----------------------------------------------
          const plot = response.Plot;
          const pThree = $("<p>").text("Plot: " + plot);
          movieDiv.append(pThree);
        //   ------------------------------------------------
          const review = response.imdbRating;
          const pFour = $("<p>").text("Score: " + review);
          movieDiv.append(pFour);
        //   ------------------------------------------------
          const genre = response.Genre;
          const pFive = $("<p>").text("Genre: " + genre);
          movieDiv.append(pFive);
        //   ------------------------------------------------
          const imgURL = response.Poster;
          const image = $("<img>").attr("src", imgURL);
          movieDiv.append(image);
          $("#movies-view").prepend(movieDiv);
        });
})