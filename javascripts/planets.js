var SolarSystem = (function(oldSolarSystem) {
	var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
	var numPlanetsPeopleLandedOn = 0;
	oldSolarSystem.getPlanets = function(){
		return planets;
	};
	oldSolarSystem.getPlanetsLandedPeopleOn = function(){			/* gets retrieve something */
		return	numPlanetsPeopleLandedOn;
	};
	oldSolarSystem.setPlanetsLandedPeopleOn = function(){			/* sets do something */
		numPlanetsPeopleLandedOn++;
	};

	return oldSolarSystem

})(SolarSystem || {});