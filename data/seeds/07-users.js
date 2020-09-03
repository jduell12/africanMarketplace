exports.seed = function (knex) {
  return knex("users").insert([
    { username: "alex", password: "pass", owner_id: 1 },
    { username: "sam", password: "pass", owner_id: 2 },
    { username: "wolf", password: "pass" },
  ]);
};
