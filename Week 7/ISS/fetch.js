// Define URL for the API to retrieve ISS data
let url = 'https://api.wheretheiss.at/v1/satellites/25544'

// Get references to HTML elements where ISS latitude, longitude, and fetched time will be displayed
let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let timeIssLocationFetched = document.querySelector('#time')

// Set the interval for updating ISS location in milliseconds
let update = 10000

// Define the maximum number of failed attempts to contact the ISS server
let maxFailedAttempts = 3

// Initialize variables for ISS marker and icon
let issMarker
let icon = L.icon({
    iconUrl: 'iss_icon.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25]
})

// Initialize Leaflet map centered at coordinates [0, 0] with maximum zoom out
let map = L.map('iss-map').setView([0, 0], 1)

// Add the tile layer for the map using OpenStreetMap data
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)

// Call the iss function with the defined maximum failed attempts
iss(maxFailedAttempts)

// Function to fetch ISS location data and update marker on the map
function iss(attempts) {

    // Check if maximum failed attempts have been reached
    if (attempts <= 0) {
        alert('Attempted to contact ISS server, failed after several attempts')
        return
    }

    // Fetch data from the ISS API
    fetch(url).then(res => res.json())
    .then((issData) => {
        // Log the received data
        console.log(issData) 
        let lat = issData.latitude
        let long = issData.longitude
        
        // Update latitude and longitude display on the webpage
        issLat.innerHTML = lat
        issLong.innerHTML = long

        // If the ISS marker doesn't exist, create it. Otherwise update its position
        if (!issMarker) {
          // Create a marker for the ISS
          issMarker = L.marker([lat, long], {icon: icon}).addTo(map)
        } else {
            issMarker.setLatLng([lat, long])
        }

        // Update the fetched time display on the webpage
        let now = Date()
        timeIssLocationFetched.innerHTML = `This data was fetched at ${now}`

    }).catch((err) => {
        attempts--
        console.log('ERROR!', err)
    }).finally( () => {
        // Set a timeout to call the iss function again after the defined update interval
        setTimeout(iss, update, attempts)
    })
}