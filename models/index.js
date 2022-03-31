// import all models
const Item = require('./Item');
const User = require('./User');

// create associations
User.hasMany(Item, {
  foreignKey: 'user_id'
});

Item.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

module.exports = { User, Item};