import dbConfig from '../config/db.config.js';
import { Sequelize } from 'sequelize';
import users from './User.js';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = () => {};
db.sequelize = Sequelize;
db.sequelize = sequelize;


var connect = users(sequelize, Sequelize)
db.models = connect

export default db;