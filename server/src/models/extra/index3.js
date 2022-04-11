// /* import fs from 'fs';
// import path from 'path'; */
// import Sequelize from 'sequelize';
// import config from '../config/db.config.js';

// const sequelize = new Sequelize(
//   /* process.env.DATABASE,
//   process.env.DATABASE_USER,
//   process.env.DATABASE_PASSWORD,
//   {
//     dialect: 'postgres',
//   }, */
//   config.db.database,
//   config.db.user,
//   config.db.password,
//   config.db.options,
// );
// const db = () => {};
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// /* fs.readdirSync(_dirname)
// .filter((file) => file !== 'index.js'
// ).forEach((file) =>{
//   const model = sequelize.import(path.join(_dirname, file))
//   db[model.name] = model
// }) */
// db.models.use('./User.js').use(sequelize, Sequelize);

// module.exports = db;

// /* const model = {
//     User
// } */
