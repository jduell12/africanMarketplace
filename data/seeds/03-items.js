exports.seed = function (knex) {
  return knex("items").insert([
    { id: 1, name: "Eggs", item_category_id: 1 },
    { id: 2, name: "Black Beans", item_category_id: 2 },
  ]);
};
