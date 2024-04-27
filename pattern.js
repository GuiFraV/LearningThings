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
    console.log(row)
}

