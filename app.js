const cardArray = [
    {
        name: 'carolina',
        img: 'images/carolina.png',
    },
    {
        name: 'emory',
        img: 'images/emory.png',
    },
    {
        name: 'eryk',
        img: 'images/eryk.png',
    },
    {
        name: 'freddy',
        img: 'images/freddy.png',
    },
    {
        name: 'kash',
        img: 'images/kash.png',
    },
    {
        name: 'nina',
        img: 'images/nina.png',
    },
    {
        name: 'carolina',
        img: 'images/carolina.png',
    },
    {
        name: 'emory',
        img: 'images/emory.png',
    },
    {
        name: 'eryk',
        img: 'images/eryk.png',
    },
    {
        name: 'freddy',
        img: 'images/freddy.png',
    },
    {
        name: 'kash',
        img: 'images/kash.png',
    },
    {
        name: 'nina',
        img: 'images/nina.png',
    }
]

cardArray.sort(() => 0.5 - Math.random()) //shuffles array randomly
console.log(cardArray)

const gridDisplay = document.querySelector('#grid') // find id with "grid"
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/back.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    } 
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/back.png')
        cards[optionTwoId].setAttribute('src', 'images/back.png')
        alert('You have clicked the same image!')
    }
    if(cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/back.png')
        cards[optionTwoId].setAttribute('src', 'images/back.png')
        alert('Sorry try again!')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations you found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}