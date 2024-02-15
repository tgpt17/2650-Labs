let user = {
    name: 'Travis',
    password: 'grogu',
    email: 'travis@gmail.com',
    roles: ['programmer', 'developer'],
    contact: {
        office: 'M1234',
        telephone: '5554567899'
    }
}

user.salary = 12345
user.roles.push('server admin')
user.contact.location = 'Minneapolis'

console.log(user)