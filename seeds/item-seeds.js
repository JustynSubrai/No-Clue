const { Item } = require('../models');

const itemData = [
    {
        name: 'Nike',
        price: 350.99,
        description: 'Nike Air Prestos, shoes',
        UserId: 1,
    },
    {
        name: 'New Balance',
        price: 150.99,
        description: 'New Balance Forum Exhibit, shoes',
        UserId: 2,
    },
    {
        name: 'Nike',
        price: 1550.99,
        description: 'Nike Air Prestos X Off White Collabs, shoes',
        UserId: 3,
    },
];



const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;
