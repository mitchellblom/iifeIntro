var SolarSystem = (function(){
	var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
	var dwarfPlanets = ["pluto"];
	var numPlanetsPeopleLandedOn = 0;
	var spaceships = [];
	var stars = ["Sun", "Alpha Centauri", "Wolf 359"];
	var age = 0;

	return {
		getPlanets : function(){
			return planets;
		},
		getPlanetsLandedPeopleOn : function(){			/* gets retrieve something */
			return	numPlanetsPeopleLandedOn;
		},
		setPlanetsLandedPeopleOn : function(){			/* sets do something */
			numPlanetsPeopleLandedOn++;
		},
		getSpaceships : function(){
			return spaceships;
		},
		setSpaceships : function(newSpaceship){		/* setters do not have a return */
			spaceships.push(newSpaceship);
		},
		wreckSpaceships : function(){							/*not a get or a set, still modifies as part of an iife*/
			spaceships.pop();
		},
		getDwarfPlanets : function(){
			return "they are rejects";
		},
		setDwarfPlanets : function(lumpOfRock){
			dwarfPlanets.push(lumpOfRock);
		},
		getStars : function(){
			return stars;
		},
		setStars : function(newStar){
			stars.push(newStar);
		},
		getSolarSystemAge: function(){
			return age;
		},
		setSolarSystemAge : function(){
			age++;
		}
	}
})();


console.log("Planets: ", SolarSystem.getPlanets());
console.log("Planets w/ people: ", SolarSystem.getPlanetsLandedPeopleOn());
SolarSystem.setSpaceships("Voyager 1");
SolarSystem.setSpaceships("Voyager 2");
SolarSystem.setSpaceships("Gemini");
SolarSystem.setSpaceships("Apollo");
console.log("Spaceships: ", SolarSystem.getSpaceships());