const Sequelize = require('sequelize');
const Connection = require('../database/Connection');


const Category = Connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Category.sync({force:true}).then(() => console.log('table {CATEGORY} created.')).catch(e => console.error(e));


module.exports = Category;