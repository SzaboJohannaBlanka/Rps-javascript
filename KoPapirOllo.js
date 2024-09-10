let choice = prompt('Üdvözöllek egy kő papír olló játékban!\nA felhasználó választása: ')

let choices = ["kő", "papír", "olló"];

let felhasznalo = 0;
let gep = 0;

let randomindex = Math.floor(Math.random() * choices.length);
let computerchoice = choices[randomindex];

console.log('A gép választása: ' + computerchoice);

if ((choice == 'kő' && computerchoice == 'olló') ||
    (choice == 'papír' && computerchoice == 'kő') ||
    (choice == 'olló' && computerchoice == 'papír')) {
    console.log('Te nyerted a kört');
    felhasznalo ++;
}

else if (choice == computerchoice) {
    console.log('Ez a kör döntetlen');
}

else {
    console.log('A gép nyerte a kört');
    gep ++;
}

console.log('A te pontszámaid: ' + felhasznalo);
console.log('A gép pontszámai: '+ gep);