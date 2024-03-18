let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let timeIssLocationFetched = document.querySelector('#time')

let update = 10000
let maxFailedAttempts = 3
let issMarker
let icon = L.icon({
    iconUrl: 'iss_icon.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25]
})

let map = L.map('iss-map').setView([0, 0], 1)  // Center at 0, 0 and max zoom out

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)

iss(maxFailedAttempts) // calls function 1 time at the start
// setInterval(iss, update) // calls function for how long the variable is set to

function iss(attempts) {

    if (attempts <= 0) {
        alert('Attempted to contact ISS server, failed after several attempts')
        return
    }

    fetch(url).then(res => res.json())
    .then((issData) => {
        console.log(issData) // TODO - display data on web page
        let lat = issData.latitude
        let long = issData.longitude
        issLat.innerHTML = lat
        issLong.innerHTML = long

        if (!issMarker) {
          // create marker
          issMarker = L.marker([lat, long], {icon: icon}).addTo(map)
        } else {
            issMarker.setLatLng([lat, long])
        }

        let now = Date()
        timeIssLocationFetched.innerHTML = `This data was fetched at ${now}`

    }).catch((err) => {
        attempts--
        console.log('ERROR!', err)
    }).finally( () => {
        setTimeout(iss, update, attempts)
    })
}

