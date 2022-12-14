let mountains = document.getElementById('mountainData');
let card = document.getElementById('card');
const all = document.getElementById("all");


function showAllMountains() {
    mountainsArray.forEach((mountainData) => {
        onShowCard(card , mountainData)
    })
}



function loadMountainSelection() {
    for (const mountain of mountainsArray) {
        let option = new Option(mountain.name, mountain.name);
        mountains.appendChild(option);
    } 
    mountainsArray.sort(function(a, b){return a.name - b.name});
loadMountainSelection();
}


function clearAllCards() {
    card.innerHTML = '';
}

function onSelectedMountain(event) {
    let selectedVal = event.target.value;

    let foundMountain = mountainsArray.find(item => {
        let mountainData = item.name ?? '';
        if (mountainData?.includes(selectedVal)) {
            return true
        }
        return false
    })

    console.log('found data = ', foundMountain);
    onShowCard(card, foundMountain);

}



function onShowCard(cardSection, mountainData) {
    
    let mounts = mountainData;
    let div = document.createElement('div');
    cardSection.appendChild(div);
    div.style = "width: 20rem;max-width: 21rem; margin-right: 3rem; border: 7px solid; justify-content: center; margin-bottom: 2rem; padding: 0; margin-top: 2rem;"
    // div.display = "flex;";
    div.className = "col";
    let cardDesc = document.createElement('p');
    let cardName = document.createElement('h3')
    let cardEffort = document.createElement('p');
    let cardEle = document.createElement('p');
    let eleminateCardBtn = document.createElement('button');
   
    const eleminate = () => cardSection.removeChild(div);
    
    eleminateCardBtn.onclick = eleminate;

    eleminateCardBtn.innerText = "Remove"
    cardName.innerText = "Name: " + mounts.name;
    cardDesc.innerText = "Description: " + mounts.desc;
    cardEffort.innerText = "Effort: " + mounts.effort;
    cardEle.innerText = "Elevation: " + mounts.elevation;

    let img = document.createElement('img');
    img.src = "./images/" + mounts.img ?? '';
    img.alt = mounts.name ?? '';
    img.style = "width:300px; height:200px"

    div.appendChild(eleminateCardBtn);
    div.appendChild(cardName);
    div.appendChild(img);
    div.appendChild(cardDesc);
    div.appendChild(cardEffort);
    div.appendChild(cardEle);
    
}

window.onload = function () {

    all.onclick = showAllMountains;

    loadMountainSelection();

    const clearAllCardsButton = document.getElementById("clearAllCards");
    clearAllCardsButton.onclick = clearAllCards;
}