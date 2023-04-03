console.log("____________________")

//common js
//const fs = require('fs')
import fs from "fs";
import {cercaProvincia, cercaRegione } from "./filtri_provincie.js";


const data = fs.readFileSync("province.json")
const province = JSON.parse(data);

//funzione di ordine superiore
const risultato_province = province.filter(cercaProvincia("TO"))
const risultato_regione = province.filter(cercaRegione("Piemonte"))

console.log("\nRisultato province",risultato_province, "\n");
console.log("\nRisultato regione",risultato_regione, "\n");