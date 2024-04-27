for(let i = 1 ; i <= 5 ; i++){
    let row = "";
    for(let j = 1; j <= 5; j++){
        row += "*";
    }
    // console.log(row)
}

for(let i = 1 ; i <= 5 ; i++){
    let row = "";
    for(let j = 1; j <= i; j++){
        row += "*";
    }
    // console.log(row)
}

for(let i = 1 ; i <= 5 ; i++){
    let row = "";
    for(let j = 5; j >= i; j--){
        row += "*";
    }
    // console.log(row)
}
// const rows = 5;
// const treeWidth = 11;

// for (let i = 1; i <= rows; i++) {
//   let row = '';
  
//   // Ajouter des espaces avant les étoiles
//   for (let j = 1; j <= (treeWidth - (2 * i - 1)) / 2; j++) {
//     row += ' ';
//   }
  
//   // Ajouter les étoiles
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     row += '*';
//   }
  
// //   console.log(row);
// }


// const rows = 5;
// const treeWidth = 11;
// const spaces = [];

// // Précalculer le nombre d'espaces pour chaque ligne
// for (let i = 1; i <= rows; i++) {
//   spaces.push((treeWidth - (2 * i - 1)) / 2);
// }

// for (let i = rows; i >= 1; i--) {
//   let row = '';
  
//   // Ajouter des espaces avant les étoiles
//   for (let j = 1; j <= spaces[i - 1]; j++) {
//     row += ' ';
//   }
  
//   // Ajouter les étoiles
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     row += '*';
//   }
  
//   console.log(row);
// }


function generatePattern(n) {
    for (let i = 1; i <= n; i++) {
        let line = '';

        // Ajouter les espaces initiaux
        for (let j = 0; j < n - i; j++) {
            line += ' ';
        }

        // Ajouter les étoiles et les espaces entre elles
        for (let k = 0; k < i; k++) {
            line += '*';
            if (k < i - 1) {  // Ajouter un espace après chaque étoile sauf la dernière
                line += ' ';
            }
        }

        // Afficher la ligne
        console.log(line);
    }
}

// Appeler la fonction avec le nombre de lignes souhaité
// generatePattern(4);


function generateInvertedPattern(n) {
    for (let i = n; i >= 1; i--) {
        let line = '';

        // Ajouter les espaces initiaux
        for (let j = 0; j < n - i; j++) {
            line += ' ';
        }

        // Ajouter les étoiles et les espaces entre elles
        for (let k = 0; k < i; k++) {
            line += '*';
            if (k < i - 1) {  // Ajouter un espace après chaque étoile sauf la dernière
                line += ' ';
            }
        }

        // Afficher la ligne
        console.log(line);
    }
}

// Appeler la fonction avec le nombre de lignes souhaité
generateInvertedPattern(4);




