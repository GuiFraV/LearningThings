// Écrivez une fonction JavaScript qui prend une chaîne de caractères en entrée et retourne une nouvelle chaîne formatée selon les règles suivantes :
// Toutes les lettres majuscules de la chaîne d'entrée doivent être extraites, triées par ordre alphabétique et placées au début de la nouvelle chaîne.
// Tous les chiffres et espaces de la chaîne d'entrée doivent être comptés, et un nombre d'espaces égal à leur somme doit être inséré après les lettres majuscules triées.
// Toutes les lettres minuscules de la chaîne d'entrée doivent être extraites, triées dans l'ordre inverse (de Z à A) et placées après les espaces.
// La fonction doit respecter les règles de tri appropriées pour les caractères accentués et les différences de casse.

const input1 = "Hello World";
// console.log(formatString(input1)); // HLO rldWo

const input2 = "C0d1ng 1s Aw3s0m3";
// console.log(formatString(input2)); // C0Aw3s0m3 gndmi

// const input3 = "ÉlÉmEnTs ÀcCeNtUéS";
// console.log(formatString(input3)); // ÀÉÉlMnSsÚ cctÉÉ

// const input4 = "123 456 789";
// console.log(formatString(input4)); // 789123456

// const input5 = "";
// console.log(formatString(input5));


const transformString = (input) => {

    const upper = (input.match(/[A-Z]/g) || []).sort().join('');
    const number = (input.match(/[0-9]/g) || []).length;
    const space = (input.match(/\s/g) || []).length;
    const lower = (input.match(/[a-z]/g) || []).sort((a,b) => b - a).join('');

    return `${upper} ${" ".repeat(number + space)} ${lower}`


}

console.log(transformString(input2))