'use strict';

//Ejercicio Dos
/*
const superWave = document.querySelector('.super-wawe');
superWave.classList.add('mark');
*/

//Ejercicio Tres
/*
const kiwi= 5;
const pera= 2;
const uvas= 4;

var kilosK= 2;
var kilosP= 3;
var kilosU= 1/2;

console.log('2 kilos de kiwi: ' + kiwi*kilosK + '€');
console.log('3 kilos de pera: ' + pera*kilosP + '€');
console.log('1/2 kilo de uvas: ' + uvas*kilosU + '€');
*/

//Ejercicio Cuatro
/*
let cuentaRestaurante= 128;
let personas= 9;
let ana=2;
let cuentaPersona=(cuentaRestaurante-ana)/personas;

console.log('Debe pagar cada una: ' + cuentaPersona +'€'+ ' y Ana debe pagar: ' + (cuentaPersona+ana) + '€');
*/

//Ejercicio Cinco
/*
const edad= 31;
const diasA= 365;
const horas= 24;
let resultado= edad*diasA*horas;

console.log('Has vivido: ' + resultado + ' Horas');
*/

//Ejercicio Seis
/*
const nombreCompañera= 'maria';

console.log('Hola '+ nombreCompañera +', encantado de conocerte.');
*/

//Ejercicio Siete
/*
const nombreCompañera= 'maria';

console.log(`Hola ${nombreCompañera}, encantado de conocerte.`);
*/

//Ejercicio Ocho
/*
const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

const listaDatos= document.querySelector('.list');
const agregarLista= `<li><h2>${firstDogName}</h2><img src="${firstDogImage}"></li>
                    <li><h2>${secondDogName}</h2><img src="${secondDogImage}"></li>
                    <li><h2>${thirdDogName}</h2><img src="${thirdDogImage}"></li>`;

listaDatos.innerHTML=agregarLista;
*/

//Ejercicio Nueve
/*
let firstName = 'Rosa';
let secondName = 'Morelia';
let firstApell = 'Jimenez';
let secondApell = 'Jimenez';
const nameCompleto = firstName+' '+secondName+' '+firstApell+' '+secondApell;
const numeroLetras = (firstName+secondName+firstApell+secondApell);


const nombre= document.querySelector('.name');
const caracteres= document.querySelector('.caracteres');
nombre.innerHTML= nameCompleto;
caracteres.innerHTML=numeroLetras.length;
*/

//Ejercicio 10
/* 
const edad= document.querySelector('.miEdad');
const diasA= 365;
const horas= 24;
const resultado= parseInt(edad)*diasA*horas;

console.log(`mi edad: ${resultado}`);
*/

//Ejercicio 11
//2 + 3 + '5' este me sumo los dos primeros números y el otro lo tomo como texto
//'2' + 3 + 5 este me tomo todos los numeros como una cadena 