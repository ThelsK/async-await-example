const fetch = require("node-fetch")

// By promise
function getData() {
  fetch("https://swapi.co/api/people/1/")
    .then(res => res.json())
    .then(res => fetch(res.homeworld))
    .then(res => res.json())
    .then(res => fetch(res.residents[res.residents.length - 1]))
    .then(res => res.json())
    .then(res => console.log("By promise:", res.name))
    .catch(console.error)
}

getData()

// By async
async function getData2() {
  let res = await fetch("https://swapi.co/api/people/1/")
  res = await res.json()
  res = await fetch(res.homeworld)
  res = await res.json()
  res = await fetch(res.residents[res.residents.length - 1])
  res = await res.json()
  console.log("By async:", res.name)
}

getData2()