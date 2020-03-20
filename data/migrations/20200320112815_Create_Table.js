exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();

      tbl.string("name").notNullable();

      tbl.string("desc");

      tbl
        .boolean("proj_complete")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("resources", tbl => {
      tbl.increments();

      tbl
        .string("name")
        .unique()
        .notNullable();

      tbl.string("desc");
    })
    .createTable("task", tbl => {
      tbl.increments();

      tbl.string("desc").notNullable();

      tbl.string("notes");

      tbl
        .boolean("task_complete")
        .notNullable()
        .defaultTo(false);

      tbl
        .integer("project_id")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("proj_res", tbl => {
      tbl.primary(["project_id", "resource_id"]);

      tbl
        .integer("project_id")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl
        .integer("resource_id")
        .unsigned()
        .references("id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExisits("proj_res")
    .dropTableIfExisits("task")
    .dropTableIfExisits("resources")
    .dropTableIfExisits("projects");
};
