"use strict";
const fake = require("faker");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    //add seed commands  here
    let tags = [];
    for (let i = 0; i <= 100; i++) {
      tags.push({
        tag_text: fake.name.tag_text(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("Tags", tags, {});
  },

  down: async (queryInterface, Sequelize) => {
    //add commands to revert seed here
    await queryInterface.bulkDelete("Tags", null, {});
  },
};
