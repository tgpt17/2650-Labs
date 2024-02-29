// Todo

// make a request to the weather API URL

// Process the response and get the weather data for each day

// make a new table row, and use the data to fill in the content for each table data in the table

// name of day
// temperature
// icon
// detailed forcast

/*let weatherUrl = 'https://api.weather.gov/gridpoints/MPX/116,72/forecast'

fetch(weatherUrl).then( function( response ) {
  // todo convert to JSON
}).then( function( actualJsonData) { // this then function
    // has a callback that is called once the data has been converted into JSOn
    // that our program can use
    console.log(actualJsonData)
})*/

let weatherUrl = 'https://api.weather.gov/gridpoints/MPX/116,72/forecast'

let weatherDataTable = document.querySelector('#weather-forecast')

// fetch makes a request to a URL, it returns a Promise
// a successful call means that we have data, and the Promise "resolved"
// the then function takes a callback function as an arguement
// the callback function takes a callback function (function definition) as an arguument
// we can process the initial response in that callback funtion
fetch(weatherUrl).then( function( response ) {
    // todo convert to JSON
  }).then( function( actualJsonData) { // this then function
      // has a callback that is called once the data has been converted into JSOn
      // that our program can use
      console.log(actualJsonData)
  })


// now we have JSON data to work with

let propertiesObject = actualJsonData.properties

let periodsArray = propertiesObject.periods

periodsArray.array.forEach(function (oneForcastPeriodObject) {
    let timeForForcast = oneForcastPeriodObject.name
})

let temperature = oneForcastPeriodObject.temperature

let newTableRow = document.createElement('tr')


let timeTableData = document.createElement('td')
timeTableData.innerHTML = timeForForcast

let temperatureTableData = document.createElement('td')
temperatureTableData.innerHTML = temperature

newTableRow.appendChild(newTableRow)

weatherDataTable.appendChild(newTableRow)


// how about images?
