    var mapDiv = 'map'; //id of the div where the map should appear
    var mapType = 'default';
    var mapLanguage = 'A';
    var proxyUrl = '';
    var apiClientKey = 'e4ad964a1a3c4c018aee29797c99d044';
    SANGC_LoadMapViewer(mapDiv, mapType, mapLanguage, proxyUrl, apiClientKey);
    
    //-- assign map loaded event to check if map is loaded
    // SANGC_OnMapLoaded = ClientOnMapLoaded;
    
//  function ClientOnMapLoaded() {
//      //--- set own marker's icon; set this after map is loaded.
//      SANGC_AddaMarkerSymbol('mymarker', './images/marker-2.png');
//      //--- show marker on map.
//      SANGC_AddMarker(1993544,46.716738,24.650482,'Saudi Post','mymarker',32,['',null,null,null]);
//  };