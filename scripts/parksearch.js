let stateCollection = document.getElementById("byState");
let locationData = document.getElementById("locationData");
let typeCollection = document.getElementById("byType");
let radioBtns = document.querySelector('input[name="byStateType"]:checked');

function loadByState() {
    for (const location of locationsArray) {
        let option = new Option(location, location);
        locationData.appendChild(option);
    }
}

function loadByType() {
    for (const type of parkTypesArray.sort()) {
        let option = new Option(type, type);
        typeData.appendChild(option);
    }
}

function onSelectType(event) {
    let selectedVal = event.target.value;

    let filteredData = nationalParksArray.filter(item => {
        let type = item.LocationName ?? '';
        if (type?.includes(selectedVal)) {
            return true;
        }
        return false
    })

    console.log('filtered data = ', filteredData);

    onShowToTable(filteredData);

}

function onSelectState(event) {
    let selectedVal = event.target.value;

    let filteredData = nationalParksArray.filter(item => {
        let state = item.State ?? '';
        if (state?.includes(selectedVal)) {
            return true;
        }
        return false
    })

    console.log('filtered data = ', filteredData);

    onShowToTable(filteredData);

}

function onShowToTable(listData = []) {
    let table = document.getElementById('listOfParks');
    // clear first
    let rows = table.rows;

    for (let i = rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    for (let i = 0; i < listData.length; i++) {
        let item = listData[i];
        let row = table.insertRow(i + 1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        cell1.innerText = item.State;
        cell2.innerText = item.LocationName;
        cell3.innerText = item.Fax;
       
        if (item.Visit){
        let a = document.createElement('a');
        let to = document.createTextNode(item.Visit);
        a.href = item.Visit;
        a.innerText = "Click Here";
        a.target = ("_blank")
        a.appendChild(to);
        cell4.appendChild(a);
 
       } 
    }
}

function onChangeState(value) {
    if (value === 'state') {
        document.getElementById('locationData').style.display = 'inline'
        document.getElementById('typeData').style.display = 'none'

    } else if (value === 'type') {
        document.getElementById('locationData').style.display = 'none'
        document.getElementById('typeData').style.display = 'inline'

    } else {
        document.getElementById('locationData').style.display = 'none'
        document.getElementById('typeData').style.display = 'none'
        onShowToTable(nationalParksArray);
    }


}


window.onload = function () {
    loadByState();
    loadByType();
}



// function loadByBoth() {

// //  if (radioBtns && radioBtns.value === "byState") {
// //     for(const location of locationsArray){
// //         let option = new Option(location, location)
// //         locationData.appendChild(option);
// //     }
// //    }
// // if (radioBtns && radioBtns.value === "byType") {
// //     for(const type of parkTypesArray){
// //         let option = new Option(type, type)
// //         typeData.appendChild(option);
// //     }
// // }
// }
// element.addEventListener('click', function() { /* do stuff here*/ }, false);


// stateCollection.addEventListener = ('click', event  => {

//     for(const location of locationsArray){
//      let option = new Option(location, location);
//        locationData.appendChild(option);
//      }
//      return loadByState;
//      }, false);

// function loadByType(){
//     for(const type  of parkTypesArray){
//         let option = new Option(type, type);
//         typeData.appendChild(option);
// }
// }