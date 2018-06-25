(function () {
    "use strict";

    var mapOptions = {
        zoom: 10,

        center: {
            lat: 29.426791,
            lng: -98.489602
        }
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var geo = new google.maps.Geocoder();

    geo.geocode({address: "105 N Interstate 35 San Marcos, TX 78666"}, function (response, status) {
        console.log(status);
        map.setCenter(response[0].geometry.location);
    })


})();