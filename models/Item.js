
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model { }

Item.init(
  {
    // Manually define the primary key
    name: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DECIMAL
    },
    description: {
      type: DataTypes.STRING
    },
    secure_url: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
  }
);


module.exports = Item;
