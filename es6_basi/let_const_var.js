console.log ("ciao sono la console")

let a = 0
//let a = 0;

const colori = []
colori.push("rosso")

//colori = "rosso";

const numeri = [14, 4, 8, 6, 1, 21, 9, 7]
//const numeri = new Array(14, 4, 8, 6, 48, 21, 9, 7)

//numero => numero * 2
const numeri_raddoppiati = numeri.map(function(numero) {
    //console.log(numero)
    return numero * 2;
})
//function (numero) {}
const numeri_pari = numeri.filter(( numero )=>{
if (numero % 2 === 0) {
    return true;
}
return false;
});

const numeri_dispari = numeri.filter( numero => numero % 2 == 1);

const somma_tutti_i_numeri = numeri.reduce((accumulatore,numero)=> {
    //accumulatore = accumulatore + numero
    return numero + accumulatore
},0);

console.log(numeri);
console.log("numeri raddoppiati",numeri_raddoppiati);
console.log("numeri pari",numeri_pari);
console.log("numeri dispari",numeri_dispari);
console.log("somma di tutti i numeri",somma_tutti_i_numeri);