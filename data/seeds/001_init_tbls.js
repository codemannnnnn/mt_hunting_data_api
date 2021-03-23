exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("table_name").insert([
        { id: 1, licenseYear: "rowValue1", huntingDistrict: 100 },
        { id: 2, licenseYear: "rowValue2", huntingDistrict: 100 },
        { id: 3, licenseYear: "rowValue3", huntingDistrict: 100 },
      ]);
    });
};
