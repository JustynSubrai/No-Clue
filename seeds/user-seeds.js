const { User } = require('../models');

const userData = [
    {
        username: 'Justyn S',
        email: 'mock@mock.com',
        password: 'password'
    },
    {
        username: 'Noelle C',
        email: 'mock254@mock.com',
        password: 'password'
    },
    {
        username: 'Pablo',
        email: 'mock123@mock.com',
        password: 'password'
    },

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
