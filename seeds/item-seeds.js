const { Item } = require('../models');

const itemData = [
    {
        name: 'Nike',
        price: 350.99,
        description: 'Nike Air Prestos, shoes',
        UserId: 1,
    },
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;