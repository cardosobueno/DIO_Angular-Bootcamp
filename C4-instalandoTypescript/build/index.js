"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 2], [3, 4]);
numArray.push("fodas");
console.log(numArray);
