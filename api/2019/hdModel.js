const db = require("../../data/knex.js");

const findAll = async () => {
  return await db("2019").select("*");
};

const findBy = (filter) => {
  return db("2019").where(filter);
};

const findById = (id) => {
  return db("2019").where({ id }).first().select("*");
};

const create = (ex) => {
  return db("2019").insert(ex).returning("*");
};

const update = (id, ex) => {
  return db("2019").where({ id: id }).first().update(ex).returning("*");
};

const remove = (id) => {
  return db("2019").where({ id }).del();
};

module.exports = {
  findAll,
  findBy,
  findById,
  create,
  update,
  remove,
};
