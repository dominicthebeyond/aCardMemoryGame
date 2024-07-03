const jsonData = [
    {
        "card": "Ace",
        "isDynamic": true,
        "values": [1, 11],
        "wildCard": true,
        "clan": ['spades', 'hearts', 'clubs', 'diamonds']
    },
    {
        "card": "King",
        "isDynamic": false,
        "values": [10],
        "clan": ['spades', 'hearts', 'clubs', 'diamonds']
    },
    {
        "card": "Queen",
        "isDynamic": false,
        "values": [10],
        "clan": ['spades', 'hearts', 'clubs', 'diamonds']
    },
    {
        "card": "Jack of All Trades",
        "isDynamic": false,
        "values": [10],
        "clan": ['spades', 'hearts', 'clubs', 'diamonds']
    },
    {
        "card": "Joker",
        "isDynamic": true,
        "values": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    {
        "card": "spades",
        "isDynamic": true,
        "values": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "regularCard": true
    },
    {
        "card": "hearts",
        "isDynamic": true,
        "values": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "regularCard": true
    },
    {
        "card": "clubs",
        "isDynamic": true,
        "values": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "regularCard": true
    },
    {
        "card": "diamonds",
        "isDynamic": true,
        "values": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "regularCard": true
    }
]

// displaying all card values in the jsonData deck.

jsonData.forEach(card => {
    console.log(`Card: ${card.card}, Values: ${JSON.stringify(card.values)}, isDynamic: ${card.isDynamic}}, wildCard: ${card.wildCard}, regularCard: ${card.regularCard}, clan; ${JSON.stringify(card.clan)}`);
});

function testCardOutput(cardValue, isDynamicInput, regularCard, wildCard) {
    // Intended to test the card value, then display it on screen.
    let jsonDataOutput;
    if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(cardValue) && isDynamicInput === true && regularCard === true && wildCard === false) {
        jsonDataOutput = `You got a diamond, club, spade, or heart with the value ${cardValue}`
    } else if ([1, 11].includes(cardValue) && isDynamicInput === true && regularCard === false && wildCard === true) {
        const aceCard = jsonData.find(card => card.card === 'Ace');
        jsonDataOutput = `You got an Ace: ${JSON.stringify(aceCard)} clans are: ${aceCard.clan.join(', ')}`;
    } else if (cardValue === 10 && isDynamicInput === false && regularCard === false && wildCard === false) {
        const faceCard = jsonData.find(card => ['Jack of All Trades', 'Queen', 'King'].includes(card.card));
        jsonDataOutput = `You got a Jack, Queen, or King ${JSON.stringify(faceCard)} clans are: ${faceCard.clan.join(', ')}`;
    } else {
        jsonDataOutput = `You got a goofy pulling: ${JSON.stringify(jsonData)}`;
    }
    console.log(jsonDataOutput);
    displayPopup(jsonDataOutput);
}

function displayPopup(message) {
    // creating a new div element.

    const popup = document.createElement('div');

    // Adding a class & styles to popup.

    popup.classList.add('popup');
    popup.textContent = message;

    // Appending/Adding the popup to the body.

    document.body.appendChild(popup);

    // Setting a timer to remove the popup after a certain timeframe (ex: popup displays for 5 seconds.)

    setTimeout(() => {
        popup.remove();
    }, 5000); // This is milliseconds. 1000 milliseconds = 1 second.
}

