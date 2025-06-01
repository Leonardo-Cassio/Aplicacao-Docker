const { Sequelize } = require('sequelize');
require('dotenv').config(); // garante que .env funcione se rodar fora do Docker

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false // desativa logs SQL para evitar poluir terminal
  }
);

module.exports = sequelize;
