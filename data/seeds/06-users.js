exports.seed = function (knex) {
  return knex("users").insert([
    {
      username: "alex",
      password: "pass",
      first_name: "Alexandria",
      owner_id: 1,
      is_owner: true,
    },
    {
      username: "sam",
      password: "pass",
      first_name: "Samantha",
      owner_id: 2,
      is_owner: true,
    },
    { username: "wolf", password: "pass", first_name: "Wolf", is_owner: false },
  ]);
};
