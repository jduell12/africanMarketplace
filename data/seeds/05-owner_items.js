exports.seed = function (knex) {
  return knex("owner_items").insert([
    {
      owner_id: 1,
      item_id: 1,
      quantity: 10,
      price: 2.99,
      description: "Farm fresh eggs",
    },
  ]);
};
