"use strict";
const fake = require("faker");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    //add seed commands  here
    let users = [];
    for (let i = 0; i <= 100; i++) {
      users.push({
        name: fake.name.firstName(),
        email: fake.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("Users", users, {});
  },

  down: async (queryInterface, Sequelize) => {
    //add commands to revert seed here
    await queryInterface.bulkDelete("Users", null, {});
  },
};
