const Sequelize = require('sequelize');
const Connection = require('../database/Connection');
const Category = require('./Category');

const Article = Connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Category.hasMany(Article);
Article.belongsTo(Category);

// Article.sync({force:true}).then(() => console.log('table {ARTICLE} created.')).catch(e => console.error(e));


module.exports = Article;