

console.time('Function #1');

/*let user = {id: 1, name: "Jean", mail: "Jean@gmail.com", langages: "Javascript,Solidity,PHP"};
let user2 = {id: 2, name: "Benoit", mail: "Benoit@gmail.com", langages: "PHP,Python,Java"};
let user3 = {id: 3, name: "Chris", mail: "Chris@gmail.com", langages: "Go,Ruby,Javascript"};

let array = [user, user2, user3];
let values = "";

console.log(array);

for(let i = 0; i < array.length; i++){
    values = array[i].langages.split(',');
    if(values.indexOf("PHP") != -1){
        console.log(array[i].name);
        break;
    }
}*/


function checkSiren(value) {
    if (typeof value === 'string') {

        let max = value.length;
        let cleanVal = '';

        for(let i = 0; i < max.length; i++) {
            console.log("value");
            /*if (isNaN(parseFloat(value[i])) === false) {
                cleanVal += value[i];
            }*/
        }
        //return cleanVal;
    }
}

//console.log(checkSiren("7653"));

console.timeEnd('Function #1');

/*
    lors d'une trueCopy exemple : let arrayCopie = [...array]; , copie les valeurs d'array dans array copie (pas réference)
    par contre ne copie pas les dimensions inférieurs d'un tableau (faire certainement fonction récursive pour ça)
    Tous pareil pour objet : let objCopy = {...obj};

    tableau et obj pareil au niveau des références
-----------------------------------------------------------
    plus performant de faire : 

        let array = [...];
        let arrayLenght = array.lenght;
        let index = 0;

        while (index < arrayLength){
            ...
        }

    que de faire : 

        let array = [...]
        let index = 0;

        while (index < array.length){
            ...
        }
-----------------------------------------------------------
    const text = "hello, everyone";

    for (const character of text) {
        console.log(`Character: ${character}`)
        boucle sur les valeurs
    }

    for (const index in text) {
        console.log(`Index: ${index}`)
        boucle sur les valeurs
    }
*/
