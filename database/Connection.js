const Sequelize =require('sequelize');


const connection = new Sequelize('nodejs_blog', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;