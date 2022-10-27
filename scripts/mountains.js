let mountains = document.getElementById('mountainData');
let card = document.getElementById('card');

function loadMountain() {
    for (const mountain of mountainsArray) {
        let option = new Option(mountain.name,mountain.name);
        mountains.appendChild(option);
    }
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
    
    card.appendChild(img);
    card.appendChild(cardName);
    card.appendChild(cardDesc);
    card.appendChild(cardEffort);
    card.appendChild(cardEle);
}

window.onload = function() {

    loadMountain();
}