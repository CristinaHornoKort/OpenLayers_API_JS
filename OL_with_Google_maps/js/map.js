var map;

        function init() {
		map = new OpenLayers.Map('map'); // Create map
		map.addControl(new OpenLayers.Control.LayerSwitcher()); // Añadimos el control para cambiar de capa.
		

		// Creamos la capa base Google Streets
		var gmap = new OpenLayers.Layer.Google("Google Streets",	{
			 mapTypeId: google.maps.MapTypeId.ROADMAP,
			sphericalMercator: true,
		});

		// Creamos la capa base Google Physical
		var gphy = new OpenLayers.Layer.Google("Google Physical", {
			type : google.maps.MapTypeId.TERRAIN,
			sphericalMercator: true
		});

		// Creamos la capa base Google Hybrid
		var ghyb = new OpenLayers.Layer.Google("Google Hybrid", {
			type : google.maps.MapTypeId.HYBRID,
			sphericalMercator: true,
		});

		// Creamos la capa base Google Satellite
		var gsat = new OpenLayers.Layer.Google("Google Satellite", {
			type : google.maps.MapTypeId.SATELLITE,
			sphericalMercator: true,
		});

		map.addLayers([gsat, gphy, gmap, ghyb]); // Añadimos las diferentes capas base al mapa.
		
		// Creamos un objeto que representa la posición del centro de Madrid. Ojo!! Hay que transformarlo a las coordenadas de google.
		var locationMadrid = new OpenLayers.LonLat(-3.691944, 40.418889).transform( new OpenLayers.Projection('EPSG:4326'), new OpenLayers.Projection('EPSG:900913') );
		
		// Centramos el mapa en las coordenadas y zoom indicado
		map.setCenter(locationMadrid, 5);
        }