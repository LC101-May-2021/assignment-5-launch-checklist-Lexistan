window.addEventListener('load', function () {
    const form = document.querySelector('form');
  
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse
      .then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
      })
      .then(function () {
        console.log(listedPlanets);
        const selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(
          document,
          selectedPlanet.name,
          selectedPlanet.diameter,
          selectedPlanet.star,
          selectedPlanet.distance,
          selectedPlanet.moons,
          selectedPlanet.image
        );
      });
  
    let list = document.getElementById('faultyItems');
    list.style.visibility = 'hidden';
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const pilotValue = document.querySelector('input[name=pilotName]').value;
      const copilotValue = document.querySelector(
        'input[name=copilotName]'
      ).value;
      const fuelLevelValue = document.querySelector(
        'input[name=fuelLevel]'
      ).value;
      const cargoMassValue = document.querySelector(
        'input[name=cargoMass]'
      ).value;
  
      formSubmission(
        document,
        list,
        pilotValue,
        copilotValue,
        fuelLevelValue,
        cargoMassValue
      );
    });
  });