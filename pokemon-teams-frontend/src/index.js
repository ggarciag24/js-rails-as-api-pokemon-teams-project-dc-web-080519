const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", function(){
  console.log("Loaded")

  getTrainers(TRAINERS_URL)
})

const cardContainer = document.getElementById('card-container')

function getTrainers(url) {
  fetch(url)
  .then(res => res.json())
  .then(trainersObjArr =>
  trainersObjArr.forEach(trainerObj => renderTrainerCard(trainerObj)))
}

function renderTrainerCard(trainerObj) {
  let pokeCard = document.createElement('div')
  pokeCard.className = "card"
  // pokeCard.id = trainerObj.id

  let trainerName = document.createElement('p')
  trainerName.innerText = trainerObj.name
  pokeCard.appendChild(trainerName)


  let addPokemonBtn = document.createElement('button')
  addPokemonBtn.id = trainerObj.id
  addPokemonBtn.innerText = "Add Pokemon"
  pokeCard.appendChild(addPokemonBtn)



  let pokeUL = document.createElement('ul')

  let pokeObjArr = trainerObj.pokemons
  renderPokemonList(pokeObjArr, pokeUL)
  pokeCard.appendChild(pokeUL)

  cardContainer.appendChild(pokeCard)
}

function renderPokemonList(pokeObjArr, pokeUL) {
  // iterate foreach array and create li

  pokeObjArr.forEach(pokeObj => {
    let pokeLI = document.createElement('li')
    pokeLI.innerText = pokeObj.nickname + `(${pokeObj.species})`

    let releaseBtn = document.createElement('button')
    releaseBtn.className = 'release'
    releaseBtn.id = pokeObj.id
    releaseBtn.innerText = "Release"
    releaseBtn.addEventListener("click", releaseBtnHandler)
    pokeLI.appendChild(releaseBtn)

    pokeUL.appendChild(pokeLI)
  })
}

function releaseBtnHandler(e) {
  console.log("delete " + e.currentTarget.parentElement.innerText)
  let pokemonID = e.currentTarget.id
  let pokemonLI = e.currentTarget.parentElement
  // pokemonToDelete.remove()
  fetch(`${POKEMONS_URL}/${pokemonID}`, {method: "DELETE"})
  .then(res => pokemonLI.remove())

  // releasePokemonFromTrainer(pokemonID)
}

// function releasePokemonFromTrainer(pokemonID) {
// }

// [ ] When a user loads the page, they should see all trainers, with their current team of Pokemon.
// [ ] Whenever a user hits "Add Pokemon" and they have space on their team, they should get a new Pokemon.
// [ ] Whenever a user hits "Release Pokemon" on a specific Pokemon team, that specific Pokemon should be released from the team.
