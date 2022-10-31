let mountains = document.getElementById('mountainData');
let card = document.getElementById('card');


function loadMountainSelection() {
    for (const mountain of mountainsArray) {
        let option = new Option(mountain.name, mountain.name);
        mountains.appendChild(option);
    }
}

function clearAllCards() {
    card.innerHTML = '';
}

function onDeleteBtnClick() {
    const node = document.getElementById("card").firstChild
    let deleteBtn = document.getElementById('deleteBtn');
    card.removeChild(node)
}


function onSelectedMountain(event) {
    let selectedVal = event.target.value;

    let foundData = mountainsArray.find(item => {
        let mountainData = item.name ?? '';
        if (mountainData?.includes(selectedVal)) {
            return true;
        }
        return false
    })

    console.log('found data = ', foundData);

    onShowCard(foundData);

}

function onShowCard(mountainData) {



    let mounts = mountainData;
    let div = document.createElement('div')
    card.appendChild(div)
    div.style = "width: 19rem;max-width: 20rem; margin-right: 3rem; border: 7px solid; justify-content: center; margin-bottom: 2rem; padding: 0;"
    div.display = "flex;";
    div.className = "col";
    let cardDesc = document.createElement('p');
    let cardName = document.createElement('h3')
    let cardEffort = document.createElement('p');
    let cardEle = document.createElement('p');


    cardName.innerText = "Name: " + mounts.name;
    cardDesc.innerText = "Description: " + mounts.desc;
    cardEffort.innerText = "Effort: " + mounts.effort;
    cardEle.innerText = "Elevation: " + mounts.elevation;

    let img = document.createElement('img');
    img.src = "./images/" + mounts.img ?? '';
    img.alt = mounts.name ?? '';
    img.style = "width:300px; height:200px"

    div.appendChild(cardName);
    div.appendChild(img);
    div.appendChild(cardDesc);
    div.appendChild(cardEffort);
    div.appendChild(cardEle);
}

window.onload = function () {

    loadMountainSelection();
    const deleteBtn = document.getElementById("deleteBtn");
    deleteBtn.onclick = onDeleteBtnClick;

    const clearAllCardsButton = document.getElementById("clearAllCards");
    clearAllCardsButton.onclick = clearAllCards;
}