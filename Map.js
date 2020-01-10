var map;

function createMap(){
  car options = {
    center: { lat: 50.3762, lng: -4.1395  },
    zoom: 10
  };

  map = new google.maps.Map(document.getElementById('map'), options);
}
