"use strict";
//ALLES IS HOOFDLETTERGEVOELIG
// Cursus
/*
console.log("Programmeren");
console.log("is");
console.log("plezant.");
// Oefening 1.1
console.log("Ik");
console.log("word");
console.log("programmeur.");
//Cursus
console.log(3.14);
console.log(5+2);
//Oefening 1.2
console.log(3*4);
//Cursus VERGELIJKEN
*//*
=== zijn twee getallen aan elkaar gelijk?
!== zijn twee getallen verschillend?
< is een getal kleiner dan een ander getal?
<= is een getal kleiner of gelijk aan een ander getal?
> is een getal groter dan een ander getal?
>= is een getal groter of gelijk aan een ander getal?
RETURN TRUE OR FALSE
*//*
console.log(5>3);
console.log("limonade" < "bier");
*/
//Oefening 1.3
/*
console.log(4.6<5);*/
//Cursus VARIABELEN
/*
const = constante variabele -> unieke naam
let = kan  wijzigen
var = word niet gebruikt
*//*
const voornaam = "Alexandra";
const kinderen = 3;
const gehuwd = true;
console.log(voornaam, kinderen, gehuwd);
let kinderen1 = 3;
kinderen1 = 4;
console.log(kinderen1);*/
// START CODE ALTIJD MET "use strict"; anders bij typfout neemt js de fout getypte variabele als een nieuwe variabele op
/*
let kinderen2 = 3;
linderen = 4;
console.log(kinderen2);
*//*
const kinderen3 = 4;
console.log("Totaal kindergeld:", kinderen3*300);*/
//prompt is een pop-up
/*
const voornaam1=prompt("Voornaam");
console.log(voornaam1);
*/
//Number = enkel cijfers
/*
const kinderen5=Number(prompt("aantal kinderen"));
console.log(kinderen5);
*/
// x = x + y / x += y / x = x + 1 / x++
//variabelen zijn hoofdlettergevoelig
//Oefening 1.4
/*
const lengte = Number(prompt("lengte"));
const hoogte = Number(prompt("breedte"));
const oppervlakte = lengte * hoogte;
console.log("De oppervlakte is: ", oppervlakte);
*/
//Cursus IF ELSE
/*
const temperatuur = Number(prompt("Temperatuur"));
if(temperatuur <= 0){
    console.log("Het vriest.");
    console.log("Je doet beter een dikke jas aan.");
} else {
    console.log("Een lichte jas volstaat.");
}
*/
//Oefening 1.5
/*
const prijsLimonade = 3;
const aantalLimonade = Number(prompt("Aantal limonades?"));
let totaalPrijsLimonade = 0;
if(aantalLimonade < 10){
    totaalPrijsLimonade = prijsLimonade * aantalLimonade;
} else {
    totaalPrijsLimonade = (prijsLimonade * aantalLimonade);
    totaalPrijsLimonade *=0.95;
}
console.log(totaalPrijsLimonade);
*/
//Cursus SWITCH CASE
/*
const hoeveelste = Number(prompt("De hoeveelste ben je"));
switch (hoeveelste) { 
 case 1: 
 console.log("Gouden medaille."); 
 break; 
 case 2:
 console.log("Zilveren medaille.");
 break;
 case 3:
 console.log("Bronzen medaille.");
 break;
 default: 
 console.log("Geen medaille.");
} 
*/
//Oefening 1.6
/*
const landcode = prompt("Geef uw landcode in");
switch(landcode){
    case "B":
        console.log("België");
        break;
    case "NL":
        console.log("Nederland");
        break;
    case "FR":
        console.log("Frankrijk");
        break;
    default:
        console.log("Onbekend")
}
*/
//Cursus WHILE
/*
let totaalBedrag = 0;
let bedragGestort = Number(prompt("Gestort bedrag (0 om te stoppen)"));
while (bedragGestort !== 0){
    totaalBedrag += bedragGestort;
    console.log(totaalBedrag);
    bedragGestort = Number(prompt("Gestort bedrag (0 om te stoppen)"));
}
console.log("Eindopbrengst:", totaalBedrag);
*/
//Oefening 1.7
/*
let getalGebruiker = Number(prompt("geef een getal in"));
let vermenigvuldigingstafel = 1;
let getalOutput = 0;
while (vermenigvuldigingstafel <= 10){
    getalOutput = getalGebruiker * vermenigvuldigingstafel;
    vermenigvuldigingstafel++;
    console.log(getalOutput);
}
 ^ was 1.8 oeps*/
 /*
const prijsLimonade = 3;
let aantalLimonade = Number(prompt("geef een aantal in"));
while(aantalLimonade <= 0){
    aantalLimonade = Number(prompt("geef een aantal in"));
}
console.log("Totale prijs limonades: ", aantalLimonade*prijsLimonade);
*/
//Cursus FOR
/*
for (let teller=1; teller<=10; teller++){
    console.log(teller);
}*/
//1e deel for wordt 1x uitgevoerd 2e deel wordt uitgevoerd zolang het waar is 3e deel word uitgevoerd zolang 2e deel waar is
//Oefening 1.8
/*
const getal = Number(prompt("geef een getal in"));
let getalCalculatie;
for (let teller1 = 1; teller1 <=10; teller1++){
    getalCalculatie = getal * teller1;
    console.log(getalCalculatie);
}
*/
//Cursus NESTEN
/*
const temperatuur = Number(prompt("Temperatuur"));
if (temperatuur <= 0) {
 if (temperatuur < -40) {
 console.log("Blijf thuis.");
 } else {
 console.log("Doe een dikke jas aan.");
 }
}
*/
/*
let volwassenen = 0;
let kinderen = 0;
let leeftijd = Number(prompt("Leeftijd (0 om te stoppen)"));
while (leeftijd !== 0) {
 if (leeftijd >= 18) {
 volwassenen++;
 } else {
 kinderen++;
 }
 leeftijd = Number(prompt("Leeftijd (0 om te stoppen)"));
}
console.log("Aantal volwassenen:", volwassenen);
console.log("Aantal kinderen:", kinderen);
*/
//Oefening 1.9
/*
let heeftWerk = prompt("Heeft u werk?");
if (heeftWerk === "ja"){
    console.log("Veel werkplezier!");
} else if (heeftWerk === "nee"){
    let wilStuderen = prompt("Wilt u een opleiding volgen?")
    if(wilStuderen === "ja"){
        console.log("Je vindt opleidingen op www.vdab.be/opleidingen");
    } else if(wilStuderen === "nee"){
        console.log("Je vindt vacatures op www.vdab.be/jobs");
    }
}
*/
//Cursus OR || AND &&
/*
const leeftijd = Number(prompt("Leeftijd"));
if (leeftijd < 7 || leeftijd > 80) { 
 console.log("Prijs:5");
} else {
 console.log("Prijs:10");
}
const gewicht = Number(prompt("Gewicht in kilogram"));
const lengte = Number(prompt("Lengte in meter"));
const bmi = gewicht / (lengte * lengte);
if (bmi >= 18.5 && bmi <= 25) { 
 console.log("OK");
}
} else {
 console.log("Niet OK");
}
*/
//Oefening 1.10
/*
let leeftijd = Number(prompt("Leeftijd"));
let bezoekers = 0;
let bezoekersKorting = 0;
while (leeftijd > 0){
    bezoekers++;
    if(leeftijd < 7 || leeftijd > 80){
        bezoekersKorting++;
    }
    leeftijd = Number(prompt("Leeftijd"));
}
console.log("aantal bezoekrs met korting", bezoekersKorting);
*/
//Cursus FUNCTIES
/*
function keuze() { 
    let antwoord = prompt("Maak uw keuze (+ voor som, - voor verschil)"); 
    while (antwoord !== "+" && antwoord !== "-") {
    antwoord = prompt("Verkeerde keuze, probeer opnieuw.");
    }
    return antwoord; 
   } 
   const getal1 = 30;
   const getal2 = 10;
   const bewerking = keuze(); 
   console.log("Getallen:", getal1, " en ", getal2);
   if (bewerking === "+") {
    console.log("Som:", getal1 + getal2);
   } else {
    console.log("Verschil:", getal1 - getal2);
   }
   function kwadraat(getal) { 
    return getal * getal;
   }
   console.log(kwadraat(4)); 
*/
//Oefening 1.11
/*
let getal = Number(prompt("geef een getal in"));
function even(getal){
    if((getal % 2) === 0){
        return true;
    } else{
        return false;
    }
}
console.log(even(getal));
*/
//Cursus ARRAY
/*
const voornamen = [ "Aeneas", "Alissia", "Anaïs" ]; 
console.log(voornamen[0]); 
voornamen[0] = "Alexandra"; 
console.log(voornamen[0]);
for (const voornaam of voornamen) { 
 console.log(voornaam);
}
*//*
const voornamen = []; 
voornamen.push(prompt("Voornaam")); 
voornamen.push(prompt("Voornaam"));
for (const voornaam of voornamen) {
 console.log(voornaam)
}
*/
//Oefening 1.12
/*
const arrayVriesTemperaturen = [];
let temperatuur = Number(prompt("Temperatuur"));
while(temperatuur !== 777){
    if(temperatuur <= 0){
        arrayVriesTemperaturen.push(temperatuur);
    }
    temperatuur = Number(prompt("Temperatuur"));
}
for (const temperatuur of arrayVriesTemperaturen){
    console.log(temperatuur);
}
*/
//Cursus OBJECT LITERAL
//is een verzameling van properties tussen {property1: x, property2: y, property3: z}
/*
const rechthoek = { lengte : 3, breedte : 2, kleur : "rood"}; 
console.log(rechthoek.lengte); 
rechthoek.lengte = 4; 
console.log(rechthoek.lengte);
*/
// in array
/*
const rechthoeken = [ 
    { lengte: 3, breedte: 2, kleur: "rood" }, 
    { lengte: 7, breedte: 4, kleur: "groen" } 
   ]; 
   for (const rechthoek of rechthoeken) { 
    console.log(rechthoek.lengte, rechthoek.breedte, rechthoek.kleur); 
   }
*//*
   const rechthoeken = [];
   let lengte = Number(prompt("Lengte"));
   while (lengte !== 0) {
    rechthoeken.push({
    lengte: lengte,
    breedte: Number(prompt("Breedte")),
    kleur: prompt("Kleur") }),
    lengte = Number(prompt("Lengte"))
   }
   for (const rechthoek of rechthoeken) {
    console.log(rechthoek.lengte, rechthoek.breedte, rechthoek.kleur);
   }
   */
  //een property van een object literal kan zelf een object literal zijn
  /*
   const adres = {
    straat: "Keizerslaan",
    huisnummer: 11,
    gemeente: { 
    postcode: 1000, 
    naam: "Brussel"
    }
    */
   //property kan een array zijn
   /*
    const persoon = {
        familienaam: "Desmet",
        voornamen: ["Hans", "Cyriel"]
       };
       for (const voornaam of persoon.voornamen) {
        console.log(voornaam);
       }
       */
//Oefening 1.13
/*
const personen = [];
let naam = prompt("Naam");
while(naam !== "stop"){
    let lengte = Number(prompt("Lengte"));
    let gewicht = Number(prompt("Gewicht"));
    let BMI = (gewicht / (lengte ** 2)).toFixed(0);
    personen.push({
        naam: naam,
        lengte: lengte,
        gewicht: gewicht,
        BMI: BMI
    })
    naam = prompt("Naam");
}       
for (const persoon of personen){
    console.log(persoon.naam, persoon.BMI);
}    
*/
//Cursus STRING
//stringnaam.lengte = lengte van de string
//string "lijkt" op een array
/*
const naam = prompt("Naam");
console.log("De eerste letter is", naam[0]); 
*/
//(1) Je leest de eerste letter (met het volgnummer 0).
//strings samenvoegen
//string1+string2
//OF
//template literal
//`${string1}${string2}` (`` > tilde knop)
/*
const voornaam = prompt("Voornaam");
const familienaam = prompt("Familienaam");
const naam = `${voornaam} ${familienaam}`; 
console.log(naam);
*/
/*
string.startsWith("A")
string.includes("b")
string.endsWith("Z")
string.indexOf("alala string alalaa") -> geeft positie wanneer 'string' voorkomt
.toUpperCase()
.toLowerCase()
.slice(2) > geeft alle letters vanaf positie 2
.slice(2,6) > geeft letters 2 tot 6
.slice(-2) > geeft laatste 2 letters
.replace("a", "b") > obvious
const metSpaties = " Alexandra ";
console.log(`>${metSpaties.trim()}<`); > spaties vooraan en achteraan WEG
console.log(`>${metSpaties.trimStart()}<`);  >spaties vooraan WEG
console.log(`>${metSpaties.trimEnd()}<`); >spaties achteraan WEG
*/
//Oefening 1.14
/*
const woord = prompt("woord");
const letter = prompt("letter");
let aantalLetters = 0;
for(const letters of woord){
    if(letter === letters){
        aantalLetters++;
    }
}
console.log(letter, "komt ", aantalLetters, " keer voor in ", woord);
*/
//Oefening 1.15
/*
const woord = prompt("woord");
let letterPositie = 0;
let letterPositie2 = (woord.length-1);
let palindroom = true;
for(const letter in woord){
    if(woord[letterPositie] === woord[letterPositie2]){
        palindroom;
    } else{
        palindroom = false;
    }
    letterPositie++;
    letterPositie2--;
}
console.log(palindroom);
*/
//TOFIXED
/*getal.toFixed(2)->2 cijfers na de komma IS EEN STRING*/ 
/*Number(getal.toFixed(2)*/
//LAMBDA is een compactie manier om functies uit te schrijven
/*
const kwadraat = getal => getal * getal;
getal => getal * getal; is de lambda
getal word getal * getal
//FOREACH
const getallen = [3,7];
getallen.forEach(getal=>console.log(getal));
//FILTER
const getallen = [-1, 2, 3, 4, 0];
const positieveGetallen = getallen.filter(getal => getal > 0); 
positieveGetallen.forEach(getal => console.log(getal));
//map
[2, 4, 5].map(getal => getal * getal) 
 .forEach(kwadraat => console.log(kwadraat));
map roept de lambda op voor elk element in de array
//reduce
Een array heeft een method reduce. reduce geeft één waarde terug.
Die waarde is een “samenvatting” (som, minimum, ...) van de elementen in de array.
Jij definieert die samenvatting als een lambda die je meegeeft aan reduce.
Voorbeeld: je maakt de som van de getallen in een array:
"use strict";
console.log([2, 5, 8, 11].reduce((som, getal) => som + getal)); 
(1) reduce voert intern volgende stappen uit:
a. Je lambda oproepen. De parameters zijn het 1° en 2° array element.
Jij geeft de som van de twee getallen (7) terug.
b. Je lambda oproepen. De parameters zijn de return waarde van de vorige oproep (7)
en het 3° element (8). Jij geeft de som (15) terug.
c. Je lambda oproepen. De parameters zijn de return waarde van de vorige oproep (15)
en het 4° element (11). Jij geeft de som (26) terug.
d. Dit (26) teruggeven.

console.log([5, 8, 2, 11].reduce(
(kleinste, getal)=> {if (kleinste < getal) return kleinste; return getal;})); 
(1) reduce voert intern volgende stappen uit:
a. Je lambda oproepen. De parameters zijn het 1° en 2° element.
Jij geeft de kleinste (5) terug.
b. Je lambda oproepen. De parameters zijn de return waarde van de vorige oproep (5)
en het 3° element (2). Jij geeft de kleinste (2) terug.
c. Je lambda oproepen. De parameters zijn de return waarde van de vorige oproep (2)
en het 4° element (11). Jij geeft de kleinste (2) terug.
d. Dit (2) teruggeven.
*/
//Oefening 1.16
/*
const personen = [];
for(let i=0; i < 10; i++){
    let naam = prompt("naam")
    let spaargeld = Math.floor(Math.random()*1500)
    personen.push({naam:naam, spaargeld:spaargeld})
}
for(const persoon of personen){
    if(persoon.spaargeld > 1000){
        console.log("Meer dan 1000 euro", persoon.naam, persoon.spaargeld);
    }}
    */
//Oefening 1.17
/*
const landen = tikLanden();
if (landen.length !== 0) {
 const gemiddelde = berekenGemiddelde(landen);
 console.log("Gemiddelde:", gemiddelde);
 toonLandenOnderGemiddelde(landen, gemiddelde);
 toonLandenBovenGemiddelde(landen, gemiddelde);
}
function tikLanden() {
 const landen = [];
 let naam = prompt("Naam");
 while (naam !== "stop") {
 landen.push({ naam: naam, oppervlakte: Number(prompt("Oppervlakte")) });
 naam = prompt("Naam");
 }
 return landen;
}
function berekenGemiddelde(landen) {
 return landen.map(land => land.oppervlakte)
 .reduce((totaal, oppervlakte) => totaal + oppervlakte) / landen.length;
}
function toonLandenOnderGemiddelde(landen, gemiddelde) {
 console.log("Onder gemiddelde:");
 landen.filter(land => land.oppervlakte < gemiddelde)
 .forEach(land => console.log(land.naam, land.oppervlakte));
}
function toonLandenBovenGemiddelde(landen, gemiddelde) {
 console.log("Boven gemiddelde:");
 landen.filter(land => land.oppervlakte > gemiddelde)
 .forEach(land => console.log(land.naam, land.oppervlakte));
}
*/
//Oefening 1.18
const personen = input();
const kleinstePersoon = kleinste(personen);
console.log(kleinstePersoon);
for (const persoon of personen){
    if(persoon.lengte === kleinstePersoon){
        console.log(persoon.naam, persoon.lengte);
    }
}
const grootstepersoon = grootste(personen);
console.log(grootstepersoon);
for(const persoon of personen){
    if(persoon.lengte === grootstepersoon){
        console.log(persoon.naam, persoon.lengte);
    }
}

function input(){
    const personen = [];
    let naam = prompt("geef een naam in");
    while(naam !== "stop"){
        let lengte = Number(prompt("lengte"));
       
        personen.push({naam:naam, lengte:lengte});
        naam = prompt("geef een naam in");
    } 
    return personen;
} 
function kleinste(personen){
    return (personen.reduce((kleinstePersoon, persoon)=> {if (kleinstePersoon.lengte < persoon.lengte) return kleinstePersoon; return persoon;})).lengte;
}
function grootste(personen){
    return (personen.reduce((grootstePersoon, persoon)=> {if(grootstePersoon.lengte > persoon.lengte) return grootstePersoon; return persoon;})).lengte;
}

