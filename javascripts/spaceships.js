var SolarSystem = (function(oldSolarSystem){ //inside function parens is the unaugmented thing

	var spaceships = [];

	oldSolarSystem.getSpaceships = function(){
			return spaceships;
	};

	oldSolarSystem.setSpaceships = function(newSpaceship){		/* setters do not have a return */
		spaceships.push(newSpaceship);
	};

	oldSolarSystem.wreckSpaceships = function(){				/*not a get or a set, still modifies as part of an iife*/
		spaceships.pop();
	};

	return oldSolarSystem;
})(SolarSystem || {}); //what you're augmenting. if the first thing doesn't exist, then augment an mt object