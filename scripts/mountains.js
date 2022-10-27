let mountains = document.getElementById('mountainData');

function loadMountain() {
    for (const mountain of mountainsArray) {
        let option = new Option(mountain.name,mountain.name);
        mountains.appendChild(option);
    }
}

function onSelectState(event) {
    let selectedVal = event.target.value;

    let foundData = mountainsArray.find(item => {
        let mountainData = item.name ?? '';
        if (mountainData?.includes(selectedVal)) {
            return true;
        }
        return false
    })

    console.log('found data = ', foundData);

    onShowToTable(foundData);

}

function onShowToTable(listData = []) {
    let table = document.getElementById('listOfMountains');

    // clear first
    let rows = table.rows;

    for (let i = rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    for (let i = 0; i < listData.length; i++) {
        let item = listData[i];
        let row = table.insertRow(i + 1);
        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3)
        let cell5 = row.insertCell(4)

        cell1.innerHTML = item.name;
        cell2.innerHTML = item.desc;
        cell3.innerHTML = item.elevation;
        cell4.innerHTML = item.effort;
        cell5.img = item.img;
    }
}

window.onload = function() {

    loadMountain();
}