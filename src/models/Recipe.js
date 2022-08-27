const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    { 
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dish_summary: {
        type: DataTypes.TEXT,
        allowNull: false, 
      },
      health_score: {
        type: DataTypes.INTEGER,
      },
      step_by_Step: {
        type: DataTypes.TEXT,
      },
      image:{
        type: DataTypes.TEXT,
        // validate:{
        //   isUrl:true
        // }
      }
    },
    {
      timestamps: false,
    }
  );
};
// [ ] Receta con las siguientes propiedades:
// ID: *
// Nombre *
// Resumen del plato *
// Nivel de "comida saludable" (health score)
// Paso a paso
