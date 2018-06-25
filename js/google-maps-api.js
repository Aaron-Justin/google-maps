(function () {
    "use strict";

    function renderMap(zoomLevel) {
        var mapOptions = {
            zoom: zoomLevel,

            center: {
                lat: 29.870934,
                lng: -97.938729
            }
        };

        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        var geo = new google.maps.Geocoder();

        geo.geocode({address: "105 N Interstate 35 San Marcos, TX 78666"}, function (response, status) {
            console.log(status);
            map.setCenter(response[0].geometry.location);
        });
        var pluckers = {lat: 29.870934, lng: -97.938729};

        var marker = new google.maps.Marker({
            position: pluckers,
            map: map
        });

        var infowindow = new google.maps.InfoWindow({
            content: "Pluckers"
        });

        infowindow.open(map, marker);
    }

    renderMap(10);

    var zoomButton = document.getElementsByClassName("zoom-button");
    console.table(zoomButton);
    // creates event listener for each button
    for (var i = 0; i < zoomButton.length ; i++) {
        zoomButton[i].addEventListener('click', function () {
            renderMap(parseInt(this.value));
            console.log(this.value);
        }, false);
    }





})();
