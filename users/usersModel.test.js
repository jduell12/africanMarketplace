const db = require("../data/db-config");
const Users = require("./usersModel");
const { intersect } = require("../data/db-config");

describe("UsersModel", () => {
  //wipes all tables in database clean so each test starts with empty tables
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("getUsers()", () => {
    it("gets an empty array of users", async () => {
      const users = await db("users");
      expect(users).toHaveLength(0);
    });
  });
});
