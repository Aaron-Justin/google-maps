(function () {
    "use strict";

    function renderMap(zoomLevel) {
        var mapOptions = {
            zoom: zoomLevel,

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
        });
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
