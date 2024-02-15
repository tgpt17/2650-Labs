let birds = ['Owl', 'Robin', 'Eagle']


//less typing, more often seen
birds.forEach( function(bird, index){
    // repeat once for each object in array
    // function will be called for each object in the array
    console.log(index, bird.toUpperCase())
})


// traditional for loop
for ( let x = 0 ; x < birds.length ; x++) {
    let bird = birds[x]
    console.log(x, bird.toUpperCase())
}

