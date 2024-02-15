let text = 'The classes are itec 1150, itec1250, itec2650'

let replaced = text.replace('itec', 'ITEC')
console.log(replaced)

let replaceAll = text.replace(/itec/g, 'ITEC') // g means global, replace all
console.log(replaceAll)