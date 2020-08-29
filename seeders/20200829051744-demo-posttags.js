"use strict";
const fake = require("faker");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let posts = await queryInterface.Sequelize.query(`SELECT id from Posts;`);
    let tags = await queryInterface.sequelize.query(`SELECT id from Tags;`);
    let posttags = [];
    for (let i = 0; i <= 100; i++) {
      posttags.push({
        post_id: fake.random.arrayElement(posts[0]).id,
        tag_id: fake.random.arrayElement(tags[0]).id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("PostTag", posttags, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("PostTag", null, {});
  },
};
