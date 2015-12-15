$(function() {
    $.getJSON('http://api.openweathermap.org/data/2.5/forecast/daily?q=Bogota&units=metric&cnt=3&appid=c795fd41bd4be40c42b0bc86ac7aa33c',
    function(data){
        $('#temptoday').html(data.list[0].temp.day);
        $('#temptomorrow').html(data.list[1].temp.day);
        $('#tempaftertomorrow').html(data.list[2].temp.day);
        $('#pressuretoday').html(data.list[0].pressure);
        $('#pressuretomorrow').html(data.list[1].pressure);
        $('#pressureaftertomorrow').html(data.list[2].pressure);
    });
    
});