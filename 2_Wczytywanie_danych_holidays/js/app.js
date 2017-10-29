$(function() {

    // variables for DOM
    var ul = $("#holiday-dates");

    //Tutaj wpisz cały adres z kluczem, będzie on wyglądał mniej więcej tak:
    //'https://holidayapi.com/v1/holidays?key=59d9c574-a4f9-4f6f-9066-13f638cb57a1&country=EN&year=2016';
    var holidayUrl = 'https://holidayapi.com/v1/holidays?key=0af6dff8-6bb0-44bc-a57a-6b59a564994e&country=PL&year=2016';
    console.log('holidayUrl');
    function insertHolidays(days) {
        for (key in days){
            var dayHolidays = days[key];
            dayHolidays.forEach(function (holiday) {
                console.log(holiday);
                var li = $('<li>');
                var span = $('<span>');
                span.append(holiday.name);
                li.append(holiday.date);
                li.append(span);
                console.log(li);
                ul.append(li)
            })
        }
    }


    function loadHolidays() {
        $.ajax({
            url: holidayUrl
        }).done(function(response){
            insertHolidays(response.holidays);
            console.log(response)
        }).fail(function(error) {
            console.log(error);
        })
    }

    loadHolidays();
    insertHolidays();
});
