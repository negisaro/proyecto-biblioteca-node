const faker = require('faker');
const { models } = require('./../libs/sequelize');

class Users {
  constructor() {
    this.usarios = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.usarios.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        imagen: faker.image.imageUrl(),
      });
    }
  }

  create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.usarios.push(newUser);
    return newUser;
  }

  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  /*findOne(id) {
    return this.usarios.find((item) => item.id === id);
  }

  update(id, changes) {
    const index = this.usarios.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Muy malo mk');
    }
    const usuario = this.usarios[index];
    this.usarios[index] = {
      ...usuario,
      ...changes,
    };

    return this.usarios[index];
  }

  delete(id) {
    const index = this.usarios.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Muy malo mk');
    }
    this.usarios.splice(index, 1);
    return `el id ${id} se elimino con exito`;
  } */
}

module.exports = Users;
