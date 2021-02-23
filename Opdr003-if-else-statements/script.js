const age = 19;
const isFemale = true;
const driverStatus = 'bob';

//Deel 1: leeftijdscheck
if (age >= 18) {
console.log('Je bent oud genoeg, welkom!');
} else {
    console.log('Helaas, je zal nog even geduld moeten hebben...');
}

//Deel 2: gender check
if (isFemale) {
    console.log('Zie je bij de Ladies Night!');
} else {
    console.log('Helaas, je mag een andere avond langskomen..');
}

//Deel 3: check of bezoeker in staat is om naar huis te rijden
if (driverStatus == 'bob') {
    console.log('Wel thuis!')
} else {
    console.log('Waar is jouw bob?')
}
