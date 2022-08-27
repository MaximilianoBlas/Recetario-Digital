const { Diet } = require("../db");



 async function createDiets() {
    const diet = await Diet.bulkCreate([
      {name: "dairy free"},
      { name: "gluten free" },
      { name: "ketogenic" },
      { name: "vegetarian" }, 
      { name: "lacto vegetarian" },
      { name: "lacto ovo vegetarian" },
      { name: "vegan" },
      { name: "pescetarian" }, 
      { name: "paleolithic" },
      { name: "primal" },
      { name: "low FODMAP" },
      { name: "whole 30" }
    ]);
    console.log("diets create");
  }

  module.exports = {
    createDiets}  ;