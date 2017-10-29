$(function(){

    //adres główny serwera REST-owego
    var apiUrl = 'http://localhost:3000';
    //cachujemy dostęp do elmentów często wykorzystywanych
    var filmListEl = $('ul.repertuar');
    var formEL = $('form.add_movie');

    /**c

     * Ładuje filmy z REST Api i po poprawnej odpowiedzi serwera
     * wykorzystuje funkcję addMovieToList w celu wstawienia filmów
     * do listy ul
     */
    function loadMovies(){

        $.ajax({
            url: apiUrl+'/movies'
        })
            .done(function(response){
                //response zawiera dane zwrócone przez serwer - filmy
                addMoviesToList(response);
            })
            .fail(function(error){
                console.log(error);
            });

    }

    /**
     * Iteruje po tablicy filmów i wykorzystuje addMovieToList do wstawienia
     * filmu do listy
     * @param moviesArr
     */
    function addMoviesToList(moviesArr){
        moviesArr.forEach(function (movie) {

            addMovieToList(movie);

        });
    }

    /**
     * Tworzy nowy element li dla pojedynczego filmy wraz ze wszystkimi
     * niezbędnymi przyciskami i wstawia do ul-a
     * @param movie
     */
    function addMovieToList(movie){
        var newEl = $('<li>',{'data-id':movie.id});
        var h3El = $('<h3>').text(movie.title);
        var pEl = $('<p>').text(movie.description);
        var delBtnEL = $('<button>',{class: 'delete'}).text('usuń');
        var editBtnEL = $('<button>',{class: 'edit'}).text('zmień');

        newEl.append(h3El);
        newEl.append(pEl);
        newEl.append(editBtnEL);
        newEl.append(delBtnEL);

        filmListEl.prepend(newEl);
    }

    /**
     * Dodaje event do formularza w celu pobrania danych z niego i wysłania
     * do REST Api - zapisanie danych
     * !!!!!!JAK JEST FORMULARZ TO ZAWSZE ZDARZENIE NA SUBMIT FORMULARZA, A NIE CLICK PRZYCISKU
     */
    function addMovie(){

        formEL.on('submit',function(e){
            e.preventDefault();

            //przygotowanie danych do wysłania - pobranie z formularza
            var dataToSend =   {
                title: formEL.find('input[name=movie_title]').val(),
                description: formEL.find('.get_description').val()
            }

            $.ajax({
                url: apiUrl+'/movies',
                method: 'POST',
                data: dataToSend, //przekazanie danych wysyłanych
                dataType: 'json'
            })
                .done(function(response){
                    //udany zapis - w response mamy pojedynczy film z uzupełnionym id z bazy
                    console.log(response);
                    addMovieToList(response);
                })
                .fail(function (error) {
                    console.log(error);
                });

        });

    }

    /**
     * Dodaje event do usuwania filmów - nasłuch na elemencie ul,
     * bo przyciski na starcie (po załadowaniu DOM) nie istnieją,
     * są one tworzone dopiero przy ładowaniu asynchronicznym (nie blokującym dalszego wykonywania skryptu)
     */
    function deleteMovie(){

        filmListEl.on('click','button.delete',function(){

            var elemId = $(this).parent().data('id');
            //cachujemy dostęp do elementu bo w .done wewnątrz funkcji callbackowej zmienia się kontekst this-a
            var elementToDelete = $(this).parent();

            $.ajax({
                url: apiUrl+'/movies/'+elemId,
                method: 'DELETE',
                dataType: 'json'
            })
                .done(function (response) {
                    elementToDelete.remove();
                })
                .fail(function (error) {
                    console.log(error);
                });


        });


    }

    /**
     * Dodanie eventu do edycji filmów
     */
    function editMovie(){

        filmListEl.on('click', 'button.edit', function(){
            //cachujemy dostęp do często wykrorzystywanych elementów
            //i zabezpieczamy się przed zmianą kontekstu this w callbacku z ajaxa
            var movieEl = $(this).parent();
            var movieTitleEl = movieEl.find('h3');
            var movieDescEl = movieEl.find('p');
            var editBtnEl = $(this);
            var movieId = movieEl.data('id');

            //sprawdzenie czy wewnątrz elementu zawierającego film
            //jest jakiś element z edycją liniową
            //w jQuery nawet jak nie znajdzie elementów to zwraca tablicę (ale pustą)
            if ( movieEl.find('[contenteditable]').length == 0 ){
                //włączenie edycji
                movieTitleEl.attr('contenteditable',true);
                movieDescEl.attr('contenteditable',true);
                editBtnEl.text('Zatwierdź');
            }else{
                //wyłączenie edycji

                //pobranie danych zedytowanych - nie potrzeba tu podawać
                //id elementu z bazy, bo id przekazujemy w adresie requesta
                var dataToSend = {
                    title: movieTitleEl.text(),
                    description: movieDescEl.text()
                }

                $.ajax({
                    url: apiUrl+'/movies/'+movieId,
                    method: 'PUT',
                    data: dataToSend,
                    dataType: 'json'
                })
                    .done(function(response){
                        editBtnEl.text('zmień');
                        movieEl.find('[contenteditable]').removeAttr('contenteditable');
                    })
                    .fail(function(error){
                        console.log(error)
                    });


            }


        })

    }



    // init program
    loadMovies();
    addMovie();
    deleteMovie();
    editMovie();
})
