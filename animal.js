// animal.js
const _ = require('lodash'); // Importa lodash

// Crear una función tradicional
function sumar(a, b) {
  return a + b;
}

// Crear una función de flecha
const sumarFlecha = (a, b) => a + b;

// Crear un objeto de ejemplo
const animal = {
  animal: 'perro',
  tipo: 'mascota',
  nombre: 'elvis',
  edad: 5,
  color: 'marrón',
  habitat: 'casa',
  dieta: 'Carnívoro',
  peso: '15 kg'
};

// Actualizar el objeto con el spread operator
const animalActualizado = {
  ...animal,
  edad: 6,
  habitat: 'Sabana',
  dieta: 'Carnívoro',
  peso: '300 kg'
};

// Obtener propiedades del objeto en un Array
const propiedades = Object.values(animalActualizado);

module.exports = { sumar, sumarFlecha, animal, animalActualizado, propiedades };
