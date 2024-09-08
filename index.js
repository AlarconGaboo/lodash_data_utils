// index.js
const _ = require('lodash'); // Importa lodash
const { autos, animales } = require('./datos'); // Importa desde datos.js
const { sumar, sumarFlecha, animal, animalActualizado, propiedades } = require('./animal'); // Importa desde animal.js

// Usa métodos de lodash
const autosUnicos = _.uniq(autos);
const animalesSalvajes = _.filter(animales, { tipo: 'salvaje' });

console.log("Autos Únicos:", autosUnicos);
console.log("Animales Salvajes:", animalesSalvajes);

// Ejemplo de uso de template literals y destructuring
const { nombre, tipo, edad, color, habitat, dieta, peso } = animal;

console.log(`El animal es un ${nombre}, es un ${tipo} de ${edad} años, de color ${color}, y vive en la ${habitat}.`);

// Mostrar resultados de funciones
console.log("Suma tradicional:", sumar(5, 3));
console.log("Suma con función de flecha:", sumarFlecha(5, 3));

// Mostrar animal actualizado
console.log("Animal actualizado:", animalActualizado);

// Mostrar propiedades del animal actualizado
console.log("Propiedades del animal actualizado:");
for (const propiedad of propiedades) {
  console.log(propiedad);
}
