
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User',{
   
    email: {
      type: DataTypes.STRING,
      unique: true,
      /* allowNull: false,
      validate: {
        notEmpty: true,
      }, */
    },
    password: {
      type: DataTypes.STRING,
      /* unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      }, */
    },
  });
  return user;
  } 
