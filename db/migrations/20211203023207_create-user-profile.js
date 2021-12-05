exports.up = (knex) => knex.schema.createTable('user_profile', (table) => {
    table.increments('id').primary();
    table.bigInteger('tenant_id').unsigned().index().references('id').inTable('tenant_profile');
    table.string('first_name');
    table.string('last_name');
    table.string('department');
    table.string('designation');
    table.string('image_url');
    table.string('city');
    table.string('country');
    table.string('bio');
    table.json('social_links');
    table.bigInteger('employee_id');
    table.timestamps(true, true);
  });
  
  exports.down = (knex) => knex.schema.dropTable('user_profile');
