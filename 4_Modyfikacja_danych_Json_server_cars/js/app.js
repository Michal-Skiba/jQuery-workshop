$(function(){
    var apiUrl = 'http://localhost:3000';
    var carList = $('ul.cars_list');
    var formEL = $('form.add_car');

    function loadCars() {
        $.ajax({
            url: apiUrl+'/cars'
        })
            .done(function(response){
               addCars(response);
               console.log(response);
            })
            .fail(function(error){
                console.log(error);
            });
    }

    function addCars(arr){
        arr.forEach(function(el) {
            addCarToList(el);
        });
    }

    function addCarToList(car) {
        var newEl = $('<li>',{'data-id':car.id});
        var h3El = $('<h3>').text(car.name);
        var pEl = $('<p>').text(car.brand);
        var delBtnEL = $('<button>',{class: 'delete'}).text('usuń');
        var editBtnEL = $('<button>',{class: 'edit'}).text('zmień');

        newEl.append(h3El);
        newEl.append(pEl);
        newEl.append(editBtnEL);
        newEl.append(delBtnEL);
        carList.prepend(newEl);
    }

    function addCar(){

        formEL.on('submit',function(e){
            e.preventDefault();
            var dataToSend =   {
                name: formEL.find('.get_name').val(),
                brand: formEL.find('.get_brand').val()
            };
            $.ajax({
                url: apiUrl+'/cars',
                method: 'POST',
                data: dataToSend,
                dataType: 'json'
            })
                .done(function(response){
                    addCarToList(response);
                })
                .fail(function (error) {
                    console.log(error);
                });

        });

    }
    function deleteCar(){
        carList.on('click','button.delete',function(){
            var elemId = $(this).parent().data('id');
            var elementToDelete = $(this).parent();
            $.ajax({
                url: apiUrl+'/cars/'+elemId,
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

    function editCar(){

        carList.on('click', 'button.edit', function(){
            var carEl = $(this).parent();
            var carTitleEl = carEl.find('h3');
            var carDescEl = carEl.find('p');
            var editBtnEl = $(this);
            var carId = carEl.data('id');

            if ( carEl.find('[contenteditable]').length == 0 ){
                carTitleEl.attr('contenteditable',true);
                carDescEl.attr('contenteditable',true);
                editBtnEl.text('Zatwierdź');
            }else{
                var dataToSend = {
                    name: carTitleEl.text(),
                    brand: carDescEl.text()
                };

                $.ajax({
                    url: apiUrl+'/cars/'+carId,
                    method: 'PUT',
                    data: dataToSend,
                    dataType: 'json'
                })
                    .done(function(response){
                        editBtnEl.text('zmień');
                        carEl.find('[contenteditable]').removeAttr('contenteditable');
                    })
                    .fail(function(error){
                        console.log(error)
                    });


            }


        })

    }





    addCar();
    deleteCar();
    editCar();
    loadCars();
    
});