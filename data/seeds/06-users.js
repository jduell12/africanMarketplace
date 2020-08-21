exports.seed = function (knex) {
  return knex("users").insert([
    { username: "alex", password: "pass", owner_id: 1 },
  ]);
};
