const cardArray = [
    {
        name: 'carolina',
        img: 'images/carolina.PNG',
    },
    {
        name: 'emory',
        img: 'images/emory.PNG',
    },
    {
        name: 'eryk',
        img: 'images/eryk.PNG',
    },
    {
        name: 'freddy',
        img: 'images/freddy.PNG',
    },
    {
        name: 'kash',
        img: 'images/kash.PNG',
    },
    {
        name: 'nina',
        img: 'images/nina.PNG',
    },
    {
        name: 'carolina',
        img: 'images/carolina.PNG',
    },
    {
        name: 'emory',
        img: 'images/emory.PNG',
    },
    {
        name: 'eryk',
        img: 'images/eryk.PNG',
    },
    {
        name: 'freddy',
        img: 'images/freddy.PNG',
    },
    {
        name: 'kash',
        img: 'images/kash.PNG',
    },
    {
        name: 'nina',
        img: 'images/nina.PNG',
    }
]

cardArray.sort(() => 0.5 - Math.random()) //shuffles array randomly
console.log(cardArray)

const gridDisplay = document.querySelector('#grid') // find id with "grid"
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []
let attempts = 0;
let message = "";

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/back.PNG')
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
        cards[optionOneId].setAttribute('src', 'images/back.PNG')
        cards[optionTwoId].setAttribute('src', 'images/back.PNG')
        message = "You have clicked the same image!"
    }
    if(cardsChosen[0] == cardsChosen[1]){
        message = "You found a match!"
        cards[optionOneId].setAttribute('src', 'images/white.PNG')
        cards[optionTwoId].setAttribute('src', 'images/white.PNG')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/back.PNG')
        cards[optionTwoId].setAttribute('src', 'images/back.PNG')
        message = "Sorry try again!"
    }

    attempts++
   
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2) {
        message = 'Congratulations you found them all!'
    }

    resultDisplay.textContent = cardsWon.length + '  | Attempts: ' + attempts + '  | ' + message
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
