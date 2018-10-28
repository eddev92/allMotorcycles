'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roads = sequelize.define('roads', {
    names: DataTypes.STRING,
    destinity: DataTypes.STRING,
    dateSal: DataTypes.DATE,
    dateReturn: DataTypes.DATE,
    point: DataTypes.STRING,
    city: DataTypes.STRING
  }, {

  });
  Roads.associate = function(models) {
    // associations can be defined here
  };
  return Roads;
};