const dotenv = require('dotenv');
const path = require('path');

const envPath = path.join(__dirname, '.env');
dotenv.config({ path: envPath });

const { DB_USER, DB_PORT, DB_HOST } = process.env;

const { Sequelize } = require('sequelize');
const { users, favorites } = require('./models/index');


// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
// "postgres://postgres@localhost:3232/rickandmorty"
// `postgres://${DB_USER}@${DB_HOST}:${DB_PORT}/rickandmorty`
const sequelize = new Sequelize(
   `postgres://${DB_USER}@${DB_HOST}:${DB_PORT}/rickandmorty`,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
users(sequelize)
//
favorites(sequelize)
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
// const { User, Favorite } = sequelize.models;

module.exports = {
   ...sequelize.models, //{User Favorites}
   conn: sequelize,
};
