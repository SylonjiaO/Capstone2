let stateCollection = document.getElementById("byState");
let locationData = document.getElementById("locationData");
let typeCollection = document.getElementById("byType");
let radioBtns = document.querySelectorAll('input[name="byStateType"]:checked');

function loadByState() {
   if (radioBtns && radioBtns.value === "byState") {
    for(const location of locationsArray){
        let option = new Option(location, location)
        locationData.appendChild(option);
    }
   }
   else if (radioBtns && radioBtns.value === "byType") {
    for(const type of parkTypesArray){
        let option = new Option(type, type)
        typeCollection.appendChild(option);
    }
}


}

window.onload = function(){
    loadByState();
    radioBtns.onchange = loadByState;
    

}