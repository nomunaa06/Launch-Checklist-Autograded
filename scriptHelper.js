// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
                                <ol>
                                    <li>Name: ${name}</li>
                                    <li>Diameter: ${diameter}</li>
                                    <li>Star: ${star}</li>
                                    <li>Distance from Earth: ${distance}</li>
                                    <li>Number of Moons: ${moons}</li>
                                </ol>
                                <img src="${imageUrl}">`
   
 }
 
 function validateInput(testInput) {
    if(testInput ===""){
        return "Empty";
    }
    else {
        if(isNaN(Number(testInput)))
        return "Not a Number";
        else {
        return "Is a Number";
        }
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if(validateInput(pilot) ==="Empty"|| 
    validateInput(copilot)==="Empty"|| 
    validateInput(fuelLevel)==="Empty"|| 
    validateInput(cargoLevel)==="Empty"){ 
        return window.alert("ALL fields are required!");
    }
    else{ 
        if(validateInput(pilot)==="Is a Number"|| validateInput(copilot)==="Is a Number"){
            return window.alert("Pilots' names shouldn't be numbers");
        }
        else if(validateInput(fuelLevel)==="Not a Number"|| validateInput(cargoLevel)==="Not a Number"){
            return window.alert("Fuel level and cargo mass must be numbers");
        }
        else {
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
            /*if(fuelLevel>10000 && cargoLevel<10000){
                document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
                document.getElementById("launchStatus").style.color = "green";
                list.style.visibility = "visible";
                document.getElementById("fuelStatus").innerHTML= "Fuel level high enough for launch";
                document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            }
            else {
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                document.getElementById("launchStatus").style.color = "red";
                list.style.visibility = "visible";

                if(fuelLevel<10000 && cargoLevel>10000){
                    document.getElementById("fuelStatus").innerHTML= "Fuel level too low for launch";
                    document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
                }
                else if(fuelLevel<10000){
                    document.getElementById("fuelStatus").innerHTML= "Fuel level too low for launch";
                    document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
                }
                else {
                    document.getElementById("fuelStatus").innerHTML= "Fuel level high enough for launch";
                    document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
                }

            }*/
          
            if(fuelLevel<10000 && cargoLevel>10000){
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                document.getElementById("launchStatus").style.color = "red";
                list.style.visibility = "visible";
                document.getElementById("fuelStatus").innerHTML= "Fuel level too low for launch";
                document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            }

            else if(fuelLevel<10000){
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                document.getElementById("launchStatus").style.color = "red";
                list.style.visibility = "visible";
                document.getElementById("fuelStatus").innerHTML= "Fuel level too low for launch";
                document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            }
            else if (cargoLevel>10000){
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                document.getElementById("launchStatus").style.color = "red";
                list.style.visibility = "visible";
                document.getElementById("fuelStatus").innerHTML= "Fuel level high enough for launch";
                document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            }
            else {
                document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
                document.getElementById("launchStatus").style.color = "green";
                list.style.visibility = "visible";
                document.getElementById("fuelStatus").innerHTML= "Fuel level high enough for launch";
                document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            }

        }

    }

 }
 
 async function myFetch() {
    let planetsReturned;
   
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
       let  json=response.json()
        return json;
    });
    // let jsonData = await planetsReturned.json();      

    return planetsReturned;
}

 function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;