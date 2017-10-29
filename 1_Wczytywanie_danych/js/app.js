$(function() {

  //variables for main ul list
  var movieLists = $('.repertuar');
  //variables for url
  var movieUrl = 'https://swapi.co/api/films/';


  /* Insert Movies to DOM  */
  function insertContent(movies) {
    for(var i = 0 ; i < movies.length; i++) {
        var li = $('<li>', {class: "movie"});
        var h3 = $('<h3>').text(movies[i].title);
        li.append(h3);
        movieLists.append(li);
    };
  }

  /* Load movies and insert them into the DOM
  */
  function loadMovies() {
        $.ajax({
            url: movieUrl
        }).done(function(response){
     		insertContent(response.results);
    	 }).fail(function(error) {
           console.log(error);
       })
  }

  loadMovies();

});
