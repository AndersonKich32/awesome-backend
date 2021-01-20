
exports.up = function(knex) {
    return knex.schema.createTable('produto', function(table){
         table.string('id').primary(),
         table.string('name').notNullable();
         table.string('price').notNullable();
     })
 };
 
 exports.down = function(knex) {
    return knex.schema.dropTable('produto');
 };