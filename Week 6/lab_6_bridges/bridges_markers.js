// coordinates for map center
let mapCenter = [44, -103];
// how much to zoom in or zoom out
let zoomLevel = 2;

let bridgeMap = L.map('bridge-map').setView(mapCenter, zoomLevel);

// Add the tile layer - roads, streets etc. Without this, nothing to see
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',
}).addTo(bridgeMap); // add the tileLayer to the bridge map

// Bridge Data
// Bridge Name 	City, State 	Span (meters) 	Location (latitude, longitude)
// Verrazano-Narrows Bridge 	New York, NY 	1298.4 	40.6066, -74.0447
// Golden Gate Bridge 	San Francisco and Marin, CA 	1280.2 	37.8199, -122.4783
// Mackinac Bridge 	Mackinaw and St Ignace, MI 	1158.0 	45.8174, -84.7278
// George Washington Bridge 	New York, NY and New Jersey, NJ 	1067.0 	40.8517, -73.9527
// Tacoma Narrows Bridge 	Tacoma and Kitsap, WA 	853.44 	47.2690, -122.5517

let bridgeData = [{
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
    },
    {
        name: 'Mackinac Bridge',
        cityState: 'Mackinaw and St Ignace, MI',
        span: 1158.0,
        coordinates: [45.8174, -84.7278]
    },
    {
        name: 'George Washington Bridge',
        cityState: 'New York, NY and New Jersey, NJ',
        span: 1067.0,
        coordinates: [40.8517, -73.9527]
    },
    {
        name: 'Tacoma Narrows Bridge',
        cityState: 'Tacoma and Kitsap, WA',
        span: 853.44,
        coordinates: [47.2690, -122.5517]
    }
];


let bridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    iconSize: [40, 40], // adjust according to your icon size
    iconAnchor: [20, 20], // adjust according to your icon size
    popupAnchor: [0, -20] // adjust according to your icon size and popup position
});

// Place a marker at each bridge location.
bridgeData.forEach(function(bridge) {
    let bridgeCoordinates = bridge.coordinates;
    let bridgeMarker; //= L.marker(bridgeCoordinates).addTo(bridgeMap);

    if (bridge.span === Math.max(...bridgeData.map(bridge => bridge.span))) {
        // If the bridge is the longest, use a different icon
        bridgeMarker = L.marker(bridgeCoordinates, { icon: bridgeIcon }).addTo(bridgeMap);
    } else {
        // Otherwise, use the default marker
        bridgeMarker = L.marker(bridgeCoordinates).addTo(bridgeMap);
    }


    // Each marker should have a popup with the bridge's name and span length. Use HTML to format this information neatly.
    bridgeMarker.bindPopup(`<b>${bridge.name}</b><br>City, State: ${bridge.cityState}<br>Span: ${bridge.span} meters`);
});

// Instead of the default marker, draw a bridge icon as the marker at the bridge locations. The image being used is bridge.png
// Make sure you set the height and width to values that work with your image icon, so your bridge icon isn't squashed or stretched.

// Examine your bridge data array and use JavaScript to figure out which bridge is longest. Draw the marker for this bridge in a different color, or display a different icon for the longest bridge. You can change the colors of an icon if you register for a Flaticon account. 