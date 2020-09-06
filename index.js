import { villagers } from './villagers.js'

let body

//created new array from villagers using map with just the information I wanted

const allVillagers = villagers.map(villager => {
    return {
        name: villager.name,
        personality: villager.personality,
        birthDay: villager.birthday_day,
        birthMonth: villager.birthday_month,
        sign: villager.sign,
        quote: villager.quote,
        imagePath: villager.image_url

    }
})


// div of each villager card

// let villagersList = document.createElement('div')
// villagersList.className = "villagers"
// container.appendChild(villagersList)

const container = document.querySelector('.container')

const header = document.querySelector('.header')

//logo div

// let logoDiv = document.createElement('div')
// logoDiv.className = "logoDiv"
// header.appendChild(logoDiv)

//logo

let logoElement = document.createElement('img')
logoElement.className = "logo"
logoElement.src = `logo.png`
header.appendChild(logoElement)


function clearDOM(){
    villagersList.innerHTML = '';
  }

function addElement(villager) {

    let card = document.createElement('div')
    card.className = "card"
    body.appendChild(card)

    let imageElement = document.createElement('img')
    card.appendChild(imageElement)
    imageElement.src = villager.imagePath

    let nameElement = document.createElement('h1')
    card.appendChild(nameElement)
    nameElement.textContent = villager.name

    let personalityElement = document.createElement('p')
    card.appendChild(personalityElement)
    personalityElement.textContent = "Personality: " + villager.personality

    let birthdayElement = document.createElement('p')
    card.appendChild(birthdayElement)
    birthdayElement.textContent = "Birthday: " + villager.birthDay + " " + villager.birthMonth

    let signElement = document.createElement('p')
    card.appendChild(signElement)
    signElement.textContent = "Sign: " + villager.sign

    let quoteElement = document.createElement('p')
    card.appendChild(quoteElement)
    quoteElement.textContent = '"' + villager.quote + '"'
    
}

function populateBody(array) {
    for(const item of array){
        addElement(item)
    }
}

const searchFor = (array, input) => {
    const newArray = array.filter(obj => {
        return (
            obj.name.toLowerCase().includes(input.toLowerCase()) ||
            obj.personality.toLowerCase().includes(input.toLowerCase()) ||
            obj.birthDay.toLowerCase().includes(input.toLowerCase()) ||
            obj.birthMonth.toLowerCase().includes(input.toLowerCase()) ||
            obj.sign.toLowerCase().includes(input.toLowerCase())
        )
    })
    return newArray
}

document.addEventListener('DOMContentLoaded', () => {
    body = document.getElementById('villagersList')
    populateBody(allVillagers)

const search = document.getElementById('search')
search.addEventListener('input', (e)=>{
    console.log('search', search.value)
    const newArray = searchFor(allVillagers, search.value)
    console.log(newArray)
    clearDOM()
    populateBody(newArray)
})
})

// card


//  allVillagers.forEach(villager => {
//         let card = document.createElement('div')
//         card.className = "card"

//         let imageElement = document.createElement('img')
//         card.appendChild(imageElement)
//         imageElement.src = villager.imagePath

//         let nameElement = document.createElement('h1')
//         card.appendChild(nameElement)
//         nameElement.textContent = villager.name

//         let personalityElement = document.createElement('p')
//         card.appendChild(personalityElement)
//         personalityElement.textContent = "Personality: " + villager.personality

//         let birthdayElement = document.createElement('p')
//         card.appendChild(birthdayElement)
//         birthdayElement.textContent = "Birthday: " + villager.birthDay + " " + villager.birthMonth

//         let signElement = document.createElement('p')
//         card.appendChild(signElement)
//         signElement.textContent = "Sign: " + villager.sign

//         let quoteElement = document.createElement('p')
//         card.appendChild(quoteElement)
//         quoteElement.textContent = '"' + villager.quote + '"'

//     })


//populate body


//filter

    // search.addEventListener('input', (e) => {
    //     const searchString = e.target.value.toLowerCase()
    //     const filteredVillagers = allVillagers.filter( villager => {
    //        return (
    //        villager.name.toLowerCase().includes(searchString) || 
    //        villager.personality.toLowerCase().includes(searchString) || 
    //        villager.birthMonth.toLowerCase().includes(searchString) || 
    //        villager.sign.toLowerCase().includes(searchString)
    //     )
    // })

    // console.log(filteredVillagers)
    // populateBody(filteredVillagers)
    // })





