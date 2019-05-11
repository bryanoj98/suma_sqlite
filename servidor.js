// require: Trae la librería express del npm.
var express = require('express');
// Se invoca la función (de la variable express) y se almacena en la variable app.
var app = express();
// var knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host     : '127.0.0.1',
//     user     : 'root',
//     password : 'nicolas98',
//     database : 'BLAM',
//     charset  : 'utf8'
//   }
// });
//
// var bookshelf = require('bookshelf')(knex);
//
// var User = bookshelf.Model.extend({
//   tableName: 'Usuario',
//   posts: function() {
//     return this.hasMany(Posts);
//   }
// });
// var knex = require('knex')({
//   client: 'mysql',
//   connection: process.env.MYSQL_DATABASE_CONNECTION
// });
// var bookshelf = require('bookshelf')(knex);
//
// var User = bookshelf.Model.extend({
//   tableName: 'users',
//   posts: function() {
//     return this.hasMany(Posts);
//   }
// });
//
// var Posts = bookshelf.Model.extend({
//   tableName: 'messages',
//   tags: function() {
//     return this.belongsToMany(Tag);
//   }
// });
//
// var Tag = bookshelf.Model.extend({
//   tableName: 'tags'
// })
//
// User.where('id', 1).fetch({withRelated: ['posts.tags']}).then(function(user) {
//   console.log(user.related('posts').toJSON());
// }).catch(function(err) {
//   console.error(err);
// });

// Define el home de la página y que función se va a ejecutar.
// La función tiene como parámetro el request y el response.
app.get('/', function (req, res) {
  res.send('Este es el home');
  console.log("Página de inicio...")
})

app.get('/cursos', function (req, res) {
  res.send('Estos son los cursos');
  console.log("Página de cursos");
})

// Correr el servidor con el puerto 8989.
app.listen(8989);
