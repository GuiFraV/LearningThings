// Écrivez une fonction JavaScript qui prend une chaîne de caractères en entrée et retourne une nouvelle chaîne formatée selon les règles suivantes :
// Toutes les lettres majuscules de la chaîne d'entrée doivent être extraites, triées par ordre alphabétique et placées au début de la nouvelle chaîne.
// Tous les chiffres et espaces de la chaîne d'entrée doivent être comptés, et un nombre d'espaces égal à leur somme doit être inséré après les lettres majuscules triées.
// Toutes les lettres minuscules de la chaîne d'entrée doivent être extraites, triées dans l'ordre inverse (de Z à A) et placées après les espaces.
// La fonction doit respecter les règles de tri appropriées pour les caractères accentués et les différences de casse.

// const input1 = "Hello World";
// console.log(formatString(input1)); 

// const input2 = "C0d1ng 1s Aw3s0m3";
// console.log(formatString(input2)); 

// const input3 = "ÉlÉmEnTs ÀcCeNtUéS";
// console.log(formatString(input3)); 

// const input4 = "123 456 789";
// console.log(formatString(input4)); 

// const input5 = "";
// console.log(formatString(input5));


const etl = (s) => {


    const Upper = (s.match(/[A-Z]/g) || []).sort().join('');

    const space = (s.match(/\s/g) || [] ).length;
    const digit = (s.match(/\d/g) || [] ).length;

    const lower = (s.match(/[a-z]/g) ||[] ).reverse().join('');

    return Upper + " ".repeat(digit + space)+lower

}

const tab = ["Hello World","C0d1ng 1s Aw3s0m3","ÉlÉmEnTs ÀcCeNtUéS","123 456 789",""]

// for(let i = 0 ; i < tab.length; i++){
    
//     console.log(etl(tab[i]))
// }








// Input: [3, 7, 1, 9, 4]
// Output: 9

const findTheMaxNumber = (input) => {


    let max = 0;

    for(let i = 0 ; i < input.length; i++){

        if(max < input[i]){
            max = input[i]
        }

    }

    return max;


}

console.log(findTheMaxNumber([3, 7, 1, 9, 4]))