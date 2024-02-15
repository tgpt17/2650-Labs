// create an object - contains properties
// properties are name: value pairs

let user = { username: 'Travis', password: 'coolguy'}

console.log(user.username)
console.log(user['username'])

console.log(user.password)
console.log(user['password'])

let whatProperty = 'password'
console.log(user[whatProperty])

let usernameProperty = 'username'
console.log(user[usernameProperty])

user.password = 'grogu'
console.log(user)

user['password'] = 'alligator'
console.log(user)

user.email = 'travis@gmail.com'
console.log(user)
console.log(user.email)