exports.up = (knex) => knex.schema.createTable('tenant_profile', (table) =>{

    table.increments('id').primary();
    table.string('tenant_name');
    table.json('address');
    table.string('city');
    table.string('state');
    table.string('country');
    table.string('zip_code');
    table.string('phone');
    table.string('web_url');
    table.timestamps(true, true);
});

exports.down = (knex) => knex.schema.dropTable('Tenant_Profile');