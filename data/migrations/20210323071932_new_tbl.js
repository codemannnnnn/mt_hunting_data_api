exports.up = function (knex) {
  return knex.schema.createTable("2018", (tbl) => {
    tbl.string("licenseYear");
    tbl.string("huntingDistrict");
    tbl.string("residency");
    tbl.string("hunters");
    tbl.string("days");
    tbl.string("daysPerHunter");
    tbl.string("totalHarvest");
    tbl.string("bulls");
    tbl.string("cows");
    tbl.string("calves");
    tbl.string("bow");
    tbl.string("rifle");
    tbl.string("spikeBullElk");
    tbl.string("lessThanSixPoints");
    tbl.string("sixOrMorePoints");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("2018");
};
