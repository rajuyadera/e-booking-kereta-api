import { Sequelize } from "sequelize";
import db from "../../config/Database.js";
import Class  from "./Class.js"

const { DataTypes } = Sequelize;

const Train = db.define(
  "train",
  {
    id_class: {
      type: DataTypes.INTEGER
    },
    train_code: {
      type: DataTypes.STRING(5),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    carriage: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    seat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

Class.hasOne(Train, {
  foreignKey: 'id_class'
})
Train.belongsTo(Class, {
  foreignKey: 'id_class'
})

export default Train;
