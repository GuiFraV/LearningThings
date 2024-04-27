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

// console.log(findTheMaxNumber([3, 7, 1, 9, 4]))



// Exercice : Trouver la paire d'éléments dont la somme est la plus proche de zéro
// Écrivez une fonction qui prend un tableau de nombres entiers relatifs en entrée et retourne la paire d'éléments dont la somme est la plus proche de zéro. Si plusieurs paires ont la même somme la plus proche de zéro, retournez n'importe laquelle d'entre elles.
// Exemple
// Input: [-4, 2, -3, 1, 6]
// Output: [-3, 2] ou [2, -3] (la somme est -1, c'est la plus proche de zéro)



// const findPairNearFromZero = (input) => {

//     let extractAllPair = [];
//     let sommePair = []

//     for(let i = 0 ; i < input.length; i++){
//         if(input[i+1] !== undefined){
//             extractAllPair.push([input[i], input[i+1]])
//         }
//     }

//    for(let i = 0 ; i < extractAllPair.length; i++){
//       sommePair.push([extractAllPair[i][0] + extractAllPair[i][1]])
//    }

//    let min = sommePair[0]
//    let index = 0;

//    for(let i = 0 ; i < sommePair.length; i++){

//     if(sommePair[i+1] > min ){

//         min = sommePair[i + 1]
//         index = i + 1;
//     }

//    }

//     console.log(min)
//     console.log(index)
//     console.log(extractAllPair[index])


// }

const findPairNearFromZero = (input) => {
  let pairePlusProche = [input[0], input[1]];
  let sommePlusProche = Math.abs(input[0] + input[1]);

  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      let somme = Math.abs(input[i] + input[j]);
      if (somme < sommePlusProche) {
        sommePlusProche = somme;
        pairePlusProche = [input[i], input[j]];
      }
    }
  }

  return pairePlusProche;
};

// console.log(findPairNearFromZero([-4, 2, -3, 1, 6]))

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

const newFormatLine = (input) => {

  const maj = (input.match(/[A-Z]/g) || []).sort((a,b) => a - b).join('')

  const num = (input.match(/[0-9]/g) ||[]).length;
  
  const space = (input.match(/\s/g) || []).length;

  const lower = (input.match(/[a-z]/g) || []).sort((a,b) => b - a).join("")

  return `${maj} ${" ".repeat(num + space)} ${lower}`


}

console.log(newFormatLine(input1))