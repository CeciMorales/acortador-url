
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('link').del()
    .then(function () {
      // Inserts seed entries
      return knex('link').insert([
        {original: 'hola', token: 'abc', generated: '.com/abc', counter: 1},
        {original: 'hola', token: 'def', generated: '.com/def', counter: 1}

      ]);
    });
};
