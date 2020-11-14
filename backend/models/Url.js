const knex = require('../database/connection');

exports.all = () => {
    return knex
        .select('*')
        .from('url');
}

exports.create = (url) => {
    console.log("model", url.urlOriginal);
    console.log("model", url.token);
    console.log("model", url.urlNew);
    console.log("model", url.counter);



    return knex('url')
        .insert({ 
            urlOriginal: url.urlOriginal, 
            token: url.token,
            urlNew: url.urlNew,
            counter: url.counter
        });
}

exports.find = (id) => {
    return knex
        .select('*')
        .from('url')
        .where('id', id)
        .first();
}

exports.addCounter = (id, counter) => {
    return knex('url')
    .where({ id: id })
    .update({ counter: counter })
}
