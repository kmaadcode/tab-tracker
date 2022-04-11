/* module.exports = {
import { Sequelize } from 'sequelize';
    port:process.env.PORT || 8081,
    db:{
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'Pitufa#_01',
        options: {
            dialect: process.env.DIALECT || 'mysql',
            host: process.env.HOST || 'localhost',
            
        }
    }
} */

import {Sequelize} from 'sequelize';
const sequelize = new Sequelize(
  'taptracker',
  'root',
  'Pitufa#_01',
  'taptracker',
  {
    HOST: 'localhost',
    dialect: mysql,
    pool: {
      max: 5,

      min: 0,

      acquire: 30000,

      idle: 10000,
    },
  })
  try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully');
  } catch (error) {
      log.error('Unable to connect to the database', error);
  }
