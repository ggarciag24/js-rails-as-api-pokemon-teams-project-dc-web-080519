const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", function(){
  console.log("Loaded")
  fetch(TRAINERS_URL)
  .then(res => res.json())
  .then(data =>
  console.log(data))

})
