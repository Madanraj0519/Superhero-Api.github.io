// https://superheroapi.com/api/access-token/character-id

const heroToken = '1852082915168513'
const base_url ='https://superheroapi.com/api.php'


// create a Global variable and DoM Function

const randomButton = document.getElementById('randomButton')
const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')
const heroImageDiv = document.getElementById('heroImage')
const heroName = document.getElementById('heroName')

const heroWork = document.getElementById('heroWork')
const stats = document.getElementById('stats')
const statsValue = document.getElementById('statsValue')

// Create a method to fetch the Api 

const getSuperHero = (id) => {
    fetch(`${base_url}/${heroToken}/${id}`).then(response => response.json())
    .then(json => {
        console.log(json.powerstats)
        const superHero = json
        getStatc(superHero)
    })
}

// getSuperHero(10)   /* Check by your own by give a id (like any number) */

//Create a Method to searchSuperHero by Giving a textName

const getSearchSuperHero = (name) => {
    console.log(searchInput.value)
  
    fetch(`${base_url}/${heroToken}/search/${name}`).then(response => response.json())
    .then(json =>{
        const hero = json.results[0]
         getStatc(hero)
      
    })


}

//create a Method to implement all the value in the dom area

const getStatc = (character) => {

    const heroImg = `<img src="${character.image.url}" width="150" height="180"/>`
    const hero = `<h3>${character.name}</h3>`
    const work = Object.keys(character.work).map(stat => {
        return `<p>${character.work[stat]}</p>`
    }).join('')

    const statse = Object.keys(character.powerstats).map(stat => {
        return `<p>${stat.toUpperCase()} : </p>`
    }).join('')

    const statsval = Object.keys(character.powerstats).map(stat => {
        return `<p>${character.powerstats[stat]}</p>`
    }).join('')

     

    heroName.innerHTML=`${hero}`
    heroImageDiv.innerHTML =`${heroImg}`
    // heroWork.innerHTML =`${work}`
    stats.innerHTML=`${statse}`
    statsValue.innerHTML=`${statsval}`

}



//get a random number for the searchRandomButton

const randomNumber = () => {
    return Math.floor(Math.random() * 731) + 1
}


// Get a global variable when we click a button to search hero

 searchButton.onclick = () => { getSearchSuperHero(searchInput.value) }

 randomButton.onclick = () => getSuperHero(randomNumber())