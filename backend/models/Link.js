const knex = require('../database/connection');

exports.all = () => {
    return knex
        .select('*')
        .from('link');
}

exports.create = (link) => {
    console.log("model", link);

    return knex('link')
        .insert({ 
            original: link.original, 
            token: link.token,
            generated: link.generated,
            counter: link.counter
        });
}

exports.addCounter = (id, counter) => {
    return knex('link')
        .where({id: id})
        .update({ counter: counter });
}

exports.find = (id) => {
    return knex
        .select('*')
        .from('link')
        .where('id', id)
        .first();
}

exports.findUrl = (original) => {
    return knex
        .select('*')
        .from('link')
        .where('original', original)
        .first();
}

exports.findToken = (token) => {
    return knex
        .select('*')
        .from('link')
        .where('token', token)
        .first();
}

exports.addCounter = (id, counter) => {
    return knex('link')
    .where({ id: id })
    .update({ counter: counter })
}
