var map;
 
        function init(){
            map = new OpenLayers.Map("map");
            
            map.addControl(new OpenLayers.Control.LayerSwitcher());

            var topo = new OpenLayers.Layer.ArcGIS93Rest("Topographic", 
				"http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/export"
			);

            var imaginery = new OpenLayers.Layer.ArcGIS93Rest("Imaginery", 
				"http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/export"
			);
			
            var physical = new OpenLayers.Layer.ArcGIS93Rest("Physical", 
				"http://services.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/export"
			);

            var shaded = new OpenLayers.Layer.ArcGIS93Rest("Shaded Relief", 
				"http://services.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/export"
			);

            var street = new OpenLayers.Layer.ArcGIS93Rest("Street Map", 
				"http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/export"
			);
			
            var terrain = new OpenLayers.Layer.ArcGIS93Rest("Terrain", 
				"http://services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/export"
			);
			
            var ocean = new OpenLayers.Layer.ArcGIS93Rest("Ocean", 
				"http://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/export"
			);
			
            map.addLayers([topo, imaginery, physical, shaded, street, terrain, ocean]);

            map.setCenter(new OpenLayers.LonLat(-1, 40), 6);
        }