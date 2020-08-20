exports.seed = function (knex) {
  return knex("item_categories").insert([
    { id: 1, category: "Animal Products" },
    { id: 2, category: "Beans" },
  ]);
};
