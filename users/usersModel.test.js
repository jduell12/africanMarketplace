const db = require("../data/db-config");
const Users = require("./usersModel");
const knexfile = require("../knexfile");

describe("UsersModel", () => {
  //wipes all tables in database clean so each test starts with empty tables
  beforeEach(async () => {
    await db.raw("TRUNCATE users RESTART IDENTITY CASCADE");
  });

  describe("getUsers()", () => {
    it("gets an empty array of users from empty db", async () => {
      const users = await Users.getUsers();
      expect(users).toHaveLength(0);
    });

    it("gets array of users from db", async () => {
      await db("users").insert({ username: "dragon", password: "pass" });
      const users = await db("users");
      expect(users).toHaveLength(1);
    });
  });

  describe("addUser(user)", () => {
    it("adds a user successfully to an empty database", async () => {
      const user = {
        username: "dragon",
        password: "pass",
      };

      const expected = [
        {
          username: "dragon",
          password: "pass",
          is_owner: false,
          owner_id: null,
          id: 1,
        },
      ];
      await Users.addUser(user);

      const users = await db("users");
      expect(users).toHaveLength(1);
      expect(users).toEqual(expected);
    });
  });
});
