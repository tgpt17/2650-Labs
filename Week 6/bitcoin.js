let bitcoinData = {
    "bpi":{
       "EUR":{
          "code":"EUR",
          "description":"Euro",
          "rate":"815.8994",
          "rate_float":815.8994,
          "symbol":"&euro;"
       },
       "GBP":{
          "code":"GBP",
          "description":"British Pound Sterling",
          "rate":"677.4879",
          "rate_float":677.4879,
          "symbol":"&pound;"
       },
       "USD":{
          "code":"USD",
          "description":"United States Dollar",
          "rate":"728.4816",
          "rate_float":728.4816,
          "symbol":"&#36;"
       }
    },
    "chartName":"Bitcoin",
    "disclaimer":"This data was generated by creating random numbers and mimics the Coinbase API JSON response structure. It is NOT real data. DO NOT USE THIS TO TRADE CRYPTOCURRENCY!",
    "time":{
       "updatedISO":"2023-02-14T20:16:14.370072"
    }
 }

 // convert $100 into bitcoin
 // print the currency descriptions and rates, on per line? (console.log)

let bpi = bitcoinData.bpi
// console.log(bpi)

for (currency in bpi) { // loop over every property in the bpi object
    console.log(currency)
    let currencyData = bpi[currency] // get the value for that property, an object with data about one currency
    console.log(currencyData)
    let currencyDescription = currencyData.description // read values from this object
    let rate = currencyData.rate
    console.log(currencyDescription + " " + rate) // display
}

 let usdData = bpi.USD
 // console.log(usdData)

 let usdExchangeRate = usdData.rate_float // one bitcoin equals 728.48 USD
// console.log("one bitcoin is " + usdExchangeRate + "USD")

 let oneHundredDollarsBitcoin = 100 / usdExchangeRate
//  console.log(oneHundredDollarsBitcoin)