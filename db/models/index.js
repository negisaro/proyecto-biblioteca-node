const { User, UserSchema } = require('./model.user');
//const { libro, UserSchema } = require('./model.libro');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  //libro.init(UserSchema, libro.config(sequelize));
}

module.exports = setupModels;
