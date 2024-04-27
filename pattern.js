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
const rows = 5;
const treeWidth = 11;

for (let i = 1; i <= rows; i++) {
  let row = '';
  
  // Ajouter des espaces avant les étoiles
  for (let j = 1; j <= (treeWidth - (2 * i - 1)) / 2; j++) {
    row += ' ';
  }
  
  // Ajouter les étoiles
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += '*';
  }
  
  console.log(row);
}




