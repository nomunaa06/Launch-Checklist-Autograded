// Write your JavaScript code here!


window.addEventListener("load", function() {

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        
        let pickedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
    })
    

    
    const form = document.querySelector("form"); 
    form.addEventListener("submit", function(event) {
        
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName= document.querySelector("input[name=copilotName]");
        let fuelLevel= document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");
        formSubmission(document,list, pilotName.value,copilotName.value, fuelLevel.value, cargoMass.value);
        event.preventDefault();
    });

   
 });

 