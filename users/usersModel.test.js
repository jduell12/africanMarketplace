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
      await db("users").insert({
        username: "dragon",
        password: "pass",
        first_name: "Dragon",
      });
      const users = await db("users");
      expect(users).toHaveLength(1);
    });
  });

  describe("addUser(user)", () => {
    it("adds a user successfully to an empty database", async () => {
      const user = {
        username: "dragon",
        password: "pass",
        first_name: "Dragon",
      };

      const expected = [
        {
          username: "dragon",
          password: "pass",
          first_name: "Dragon",
          is_owner: false,
          owner_id: null,
          id: 1,
        },
      ];
      count = await Users.addUser(user);
      expect(count[0]).toEqual(1);

      const users = await db("users");
      expect(users).toHaveLength(1);
      expect(users).toEqual(expected);
    });

    it("adds a user successfully to a non-empty database", async () => {
      await db("users").insert(
        {
          username: "wolf",
          password: "pass",
          first_name: "Wolf",
        },
        "id",
      );

      const user = {
        username: "dragon",
        password: "pass",
        first_name: "Dragon",
      };

      const expected = [
        {
          username: "wolf",
          password: "pass",
          first_name: "Wolf",
          is_owner: false,
          owner_id: null,
          id: 1,
        },
        {
          username: "dragon",
          password: "pass",
          first_name: "Dragon",
          is_owner: false,
          owner_id: null,
          id: 2,
        },
      ];

      await Users.addUser(user);

      const users = await db("users");
      expect(users).toHaveLength(2);
      expect(users).toEqual(expected);
    });
  });

  describe("editUser(userId, user)", () => {
    it("edits a user successfully when only 1 user in database", async () => {
      await db("users").insert(
        {
          username: "dragon",
          password: "pass",
          first_name: "Dragon",
        },
        "id",
      );

      const expected = [
        {
          username: "dragon",
          password: "pass",
          first_name: "Jess",
          is_owner: false,
          owner_id: null,
          id: 1,
        },
      ];

      await Users.editUser(1, { first_name: "Jess" });
      const users = await db("users");
      expect(users).toHaveLength(1);
      expect(users).toEqual(expected);
    });

    it("edits a user correctly when more than 1 user in database", async () => {
      await db("users").insert(
        {
          username: "dragon",
          password: "pass",
          first_name: "Dragon",
        },
        "id",
      );
      await db("users").insert(
        {
          username: "wolf",
          password: "pass",
          first_name: "Wolf",
        },
        "id",
      );
      await db("users").insert(
        {
          username: "dragon2",
          password: "pass",
          first_name: "Jess",
        },
        "id",
      );

      const expected = [
        {
          username: "dragon",
          password: "pass",
          first_name: "Dragon",
          is_owner: false,
          owner_id: null,
          id: 1,
        },
        {
          username: "wolf",
          password: "pass",
          first_name: "Jeremy",
          is_owner: false,
          owner_id: null,
          id: 2,
        },
        {
          username: "dragon2",
          password: "pass",
          first_name: "Jess",
          is_owner: false,
          owner_id: null,
          id: 3,
        },
      ];

      await Users.editUser(2, { first_name: "Jeremy" });

      const users = await db("users");
      expect(users).toHaveLength(3);
      expect(users).toEqual(expect.arrayContaining(expected));
    });
  });
});
