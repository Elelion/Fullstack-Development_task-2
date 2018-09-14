/* jshint esversion: 6 */

function initMap() {
	var element = document.getElementById('map');
	var marker;

	function addMarker(proporties) {
		marker = new google.maps.Marker({
			position: proporties.coordinates,
			map: myMap,
			icon: proporties.image
		});
	}


	/**/

	// координаты на которых наша карта загрузиться
	var options = {
		zoom: 15,
		disableDefaultUI:true, // убираем стандартные кнопки управления
		center: {lat: 37.7945742, lng: -122.415077} // старт карты
	};

	// for output maps
	var myMap = new google.maps.Map(element, options);

	// создаем маркер с помощью ф-ции
	addMarker({
		coordinates: { lat: 37.7910742, lng: -122.415077 },
		image: 'images/mapMarker.png'
	});

	var InfoWindow = new google.maps.InfoWindow({
		content: '<h1> Bingo...! </h1>'
	});
						
	// делаем наш маркер слушателем					
	marker.addListener('click', function() {
		// делаем окошко с информацией
		InfoWindow.open(myMap, marker);
	});					
}