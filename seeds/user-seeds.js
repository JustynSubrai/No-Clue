const { User } = require('../models');

const userData = [
    {
        username: 'Justyn S',
        email: 'mock@mock.com',
        password: 'password'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;