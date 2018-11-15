'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('team', {
    name: DataTypes.STRING,
    quantityMembers: DataTypes.INTEGER,
    teamCode: DataTypes.STRING,
    city: DataTypes.STRING,
    sponsors: DataTypes.STRING,
    leader: DataTypes.STRING
  }, {});
  Team.associate = function(models) {
    // associations can be defined here
  };
  return Team;
};