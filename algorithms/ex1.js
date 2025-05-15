// Given an array of superheroes of Marvel, make a code

// Input: showInfoSuperHero('IronMan')
// Output: { name: 'IronMan', power: 'Genius', team: 'Avengers' }

const infoSuperheroes = {
  "Iron Man": {
    nombreReal: "Tony Stark",
    poderes: ["Tecnologia avanzada", "Movilidad aérea"],
    equipo: "Los vengadores",
  },
  "Capitán América": {
    nombreReal: "Steve Rogers",
    poderes: ["Fuerza sobrehumana", "Agilidad y reflejos sobresalientes"],
    equipo: "Los vengadores",
  },
  Thor: {
    nombreReal: "Thor Odinson",
    poderes: ["Mjolnir", "Viento y trueno"],
    equipo: "Los vengadores",
  },
  "Spider-Man": {
    nombreReal: "Peter Parker",
    poderes: ["Balanceo", "Telarañas pegajosas", "Sentido aracnido"],
    equipo: "Los vengadores",
  },
  Hulk: {
    nombreReal: "Bruce Banner",
    poderes: ["Fuerza sobrehumana", "Invulnerabilidad"],
    equipo: "Los vengadores",
  },
};

function showInfoSuperHero(superHero) {
  if (superHero in infoSuperheroes) {
    const info = infoSuperheroes[superHero];
    console.log(info);
  } else {
    console.log("It doesn't exist");
  }
}

showInfoSuperHero("Iron Man");
