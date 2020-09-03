exports.seed = function (knex) {
  return knex("items_to_buy").insert([{ item_id: 1, user_id: 1 }]);
};
