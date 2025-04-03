"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "alice",
          email: "alice@example.com",
          password: "password123", // For production, hash your passwords!
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "bob",
          email: "bob@example.com",
          password: "password456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "charlie",
          email: "charlie@example.com",
          password: "password789",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "dave",
          email: "dave@example.com",
          password: "password101",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "eve",
          email: "eve@example.com",
          password: "password202",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "frank",
          email: "frank@example.com",
          password: "password303",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "grace",
          email: "grace@example.com",
          password: "password404",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "heidi",
          email: "heidi@example.com",
          password: "password505",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "ivan",
          email: "ivan@example.com",
          password: "password606",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "judy",
          email: "judy@example.com",
          password: "password707",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
