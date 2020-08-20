exports.seed = function (knex) {
  return knex("locations").insert([
    { location: "London" },
    { location: "Raleigh" },
  ]);
};
