/*
De gebruiker typt per artikel de naam, de aankoopprijs en de verkoopprijs.
Hij herhaalt dit tot hij stop typt bij de naam.
Hij tikt daarna een woord.
Toon de namen van de artikels die in hun naam dit woord bevatten.
De gebruiker tikt twee getallen.
Als het tweede getal kleiner is dan het eerste getal toont je een foutmelding.
Anders toon je de namen en verkoopprijzen van de artikels waarvan de verkoopprijs ligt tussen
deze twee getallen. Als een verkoopprijs gelijk is aan het eerste of het tweede getal neem je het
ook op in de lijst.
Toon de gemiddelde verkoopprijs van de artikels.

*/
"use strict";
const artikels = [];
const artikelsMetWoord = [];
const artikelsBinnenPrijs = [];
let artikel = prompt("Naam Artikel");
let totaalVerkoopPrijs = 0;
let aantalArtikels = 0;

while(artikel !== "stop"){
    let aankoopPrijs = Number(prompt("Aankoopprijs"));
    let verkoopPrijs = Number(prompt("Verkoopprijs"));
    if(verkoopPrijs >= aankoopPrijs){
        aantalArtikels++;
        totaalVerkoopPrijs += verkoopPrijs;
        artikels.push({
            naam: artikel,
            aankoopPrijs: aankoopPrijs,
            verkoopPrijs:verkoopPrijs
        });
    } else{
        alert("De aankoopprijs kan niet hoger zijn dan de verkoopprijs");
    }
    artikel = prompt("Naam Artikel");
}

let woord = prompt("Zoek artikelen op woord die voorkomt in de naam van het artikel");
console.log("Artikels die het woord bevatten:");

for (const artikel of artikels){
    if(artikel.naam.includes(woord)){
      console.log(artikel.naam);
    }
}

let bodemPrijs = Number(prompt("Geef een bodemprijs in"));
let topPrijs = Number(prompt("Geef een topprijs in"));

if(bodemPrijs > topPrijs){
    console.log("Fout: de bodemprijs kan niet hoger zijn dan te topprijs");
} else{
    console.log("Artikels met prijs binnen de gegeven min en max prijs: ");
    for (const artikel of artikels){
        if (artikel.verkoopPrijs >= bodemPrijs && artikel.verkoopPrijs <= topPrijs){
            console.log(artikel.naam, artikel.verkoopPrijs);
        }
    }
}

let gemiddeldeVerkoopPrijs = Number((totaalVerkoopPrijs / aantalArtikels).toFixed(2));
console.log("Gemiddelde verkoopprijs: ", gemiddeldeVerkoopPrijs);
