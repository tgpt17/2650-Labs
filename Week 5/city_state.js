function cityStateAddress(city, state) {
    let address = `${city}, ${state.toUpperCase()}` // mn -> MN
    return address
}

console.log(cityStateAddress('Minneapolis', 'mn'))
let address = cityStateAddress('Seattle', 'WA')
console.log(address)