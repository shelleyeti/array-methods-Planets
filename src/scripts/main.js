//select location of output
const outEl = document.querySelector("#output");
const upperEl = document.querySelector("#uppercase")
const letterE = document.querySelector("#containsE");

//add a heading that does not change
outEl.innerHTML = `<h1>Solar Planets</h1> 
    <h2>Planet Names</h2>`;

upperEl.innerHTML = `<h2>Uppercase Planet Names</h2>`;
letterE.innerHTML = `<h2>Contains the Letter E</h2>`;

const planets = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune"
];


/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
planets.forEach(planetsHaveNames => {
    planetName = planetsHaveNames;
    outEl.innerHTML += planetName += `<hr>`;
})

const planetEl = document.getElementById("planets");

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
planets.map(planetWithNames => {
    capitalizedPlanets = planetWithNames.toUpperCase();
    upperEl.innerHTML += capitalizedPlanets += `<hr>`;
});


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
planets.filter(planetNames => {
    planetsWithE = planetNames.includes("e");
    if (planetsWithE) {
        letterE.innerHTML += planetNames += `<hr>`;
    }
})