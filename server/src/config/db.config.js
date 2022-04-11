/* const { Sequelize } = require('@sequelize/core');
const sequelize = new Sequelize('tabtracker', 'root',' Pitufa#_01',{
    host: 'localhost',
    dialect:'mysql'
})

try{
    await sequelize.authenticate();
    console.log('Connection has been established successfully');
} catch (error){
    log.error('Unable to connect to the database', error);
} */

const dbConfig = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'Pitufa#_01',
  DB: 'tabtracker',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
export default dbConfig;
