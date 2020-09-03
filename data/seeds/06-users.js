exports.seed = function (knex) {
  return knex("users").insert([
    {
      username: "alex",
      password: "pass",
      owner_id: 1,
      is_owner: true,
    },
    { username: "sam", password: "pass", owner_id: 2, is_owner: true },
    { username: "wolf", password: "pass", is_owner: false },
  ]);
};
