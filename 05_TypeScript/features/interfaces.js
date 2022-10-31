var oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary: function () {
    return "\n    Name   : "
      .concat(this.name, "\n    Year   : ")
      .concat(this.year, "\n    Broken : ")
      .concat(this.broken, "\n    ");
  },
};
var printVehicle = function (vehicle) {
  console.log("\n  ".concat(vehicle.summary(), "\n    "));
};
printVehicle(oldCivic);
