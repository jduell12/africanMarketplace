exports.up = function (knex) {
  return knex.schema
    .createTable("locations", (tbl) => {
      tbl.increments("id");
      tbl.string("location", 256).notNullable().unique();
    })
    .createTable("owners", (tbl) => {
      tbl.increments("id");
      tbl
        .integer("location_id")
        .unsigned()
        .references("locations.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("users", (tbl) => {
      tbl.increments("id");
      tbl.string("username", 256).notNullable().unique();
      tbl.string("password", 256).notNullable();
      tbl
        .integer("owner_id")
        .unsigned()
        .references("owners.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("item_categories", (tbl) => {
      tbl.increments("id");
      tbl.string("category", 256).notNullable().unique();
    })
    .createTable("items", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 256).notNullable().unique();
      tbl
        .integer("item_category_id")
        .unsigned()
        .references("item_categories.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("owner_items", (tbl) => {
      tbl.increments("id");
      tbl.integer("quantity").notNullable();
      tbl.decimal("price").notNullable();
      tbl.text("description");
      tbl
        .integer("owner_id")
        .unsigned()
        .references("owners.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("item_id")
        .unsigned()
        .references("items.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("owner_items")
    .dropTableIfExists("items")
    .dropTableIfExists("item_categories")
    .dropTableIfExists("users")
    .dropTableIfExists("owners")
    .dropTableIfExists("locations");
};
