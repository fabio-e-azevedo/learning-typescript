const response = await fetch('https://jsonplaceholder.typicode.com/users')
const users = await response.json()
//console.log(users)

users.forEach( (item) => {
  console.log(`Name: ${item.name} ===>>> Email: ${item.email}`)
})
