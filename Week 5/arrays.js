let animals = ['lion', 'tiger', 'cheetah']

console.log(animals)
console.log(animals[1])

animals[1] = 'zebra' // change 1 value
console.log(animals)

animals.push('elephant') // add to end of array
console.log(animals)

let lastAnimal = animals.pop() // remove from end of array
console.log(lastAnimal)
console.log(animals)


animals.unshift('deer') //add to beginning of array
console.log(animals)

let firstAnimal = animals.shift() // remove first item in array
console.log(firstAnimal) // showing first item in array
console.log(animals)

animals.reverse()
console.log(animals)

animals.sort()
console.log(animals)

let numberOfAnimals = animals.length
console.log(numberOfAnimals)


console.log(animals.indexOf('lion'))

if (animals.indexOf('walrus') == -1) {
    console.log('walrus is not in the array')
}

if (animals.includes('cheetah')) {
    console.log('cheetah is in the array')
}

console.log(animals.join(' * '))

animals.forEach( function(animal) {
    console.log(animal)
})

animals.forEach(function(animal){
    console.log(animal.length)
})

animals.push('alligator')

let animalNameLength = []
animals.forEach(function(animal){
    let length = animal.length
    animalNameLength.push(length)
    console.log(animalNameLength)
})