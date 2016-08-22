$(document).ready(function() {
        $.ajax({
            url: 'http://ipinfo.io/json',
            dataType: 'json'
        }).then(function(ipInfo) {
            window.ipInfo = ipInfo;
            var url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + ipInfo.postal + ',us&appid=abb9e6ace1e089c58976438ae892c89c&units=imperial';
            return $.ajax({
                url: url,
                dataType: 'json'
            });
        }).done(function(weather) {
        	document.getElementById('temperature').innerHTML = weather.main.temp + ' &#x2109;';
        	document.getElementById('city').innerHTML = ipInfo.city + ', ' + ipInfo.region + ', ' + ipInfo.country;
        });

    });