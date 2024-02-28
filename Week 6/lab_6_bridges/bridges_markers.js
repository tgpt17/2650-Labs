// coordinates for map center
let mapCenter = [44, -103]
// how much to zoom in or zoom out
let zoomLevel = 2

let bridgeMap = L.map('bridge-map').setview(mapCenter, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',
}).addTo(bridgeMap)  // add the tileLayer to the bridge map

// Bridge Data
// Bridge Name 	City, State 	Span (meters) 	Location (latitude, longitude)
// Verrazano-Narrows Bridge 	New York, NY 	1298.4 	40.6066, -74.0447
// Golden Gate Bridge 	San Francisco and Marin, CA 	1280.2 	37.8199, -122.4783
// Mackinac Bridge 	Mackinaw and St Ignace, MI 	1158.0 	45.8174, -84.7278
// George Washington Bridge 	New York, NY and New Jersey, NJ 	1067.0 	40.8517, -73.9527
// Tacoma Narrows Bridge 	Tacoma and Kitsap, WA 	853.44 	47.2690, -122.5517


let bridgeData = [ {
    name: 'Verrazano-Narrows Bridge',
    cityState: 'New York, NY',
    span: 1298.4,
    coordinates: [40.6066, -74.0447]
},
{
    name: 'Golden Gate Bridge',
    cityState: 'San Francisco and Marin, CA',
    span: 1280.2,
    coordinates: [37.8199, -122.4783] 
}


]

// todo make three more objects for the other bridges

bridgeData.forEach( function (bridge){
    let bridgeCoordinates = bridge.coordinates
    let bridgeMarker = L.marker(bridgeCoordinates).addTo(bridgeMap)
    // todo create popup from data in the bridge object
})
