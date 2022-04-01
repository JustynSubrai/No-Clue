// import all models
const Item = require('./Item');
const User = require('./User');

// create associations
User.hasMany(Item);

Item.belongsTo(User);

module.exports = { User, Item };