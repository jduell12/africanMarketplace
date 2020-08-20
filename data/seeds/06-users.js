exports.seed = function (knex) {
  return knex("users").insert([
    { username: "wolf", password: "pass", owner_id: 1 },
  ]);
};
