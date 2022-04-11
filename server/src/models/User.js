const getUserModel = (sequelize, DataTypes) => {
  const use = sequelize.define('User', {
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
  return getUserModel;
};;

export default getUserModel;