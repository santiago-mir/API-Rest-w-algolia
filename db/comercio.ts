import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";

export class Comercio extends Model {}
Comercio.init(
  {
    name: { type: DataTypes.STRING },
    rubro: { type: DataTypes.STRING },
    lat: { type: DataTypes.FLOAT },
    lng: { type: DataTypes.FLOAT },
  },
  {
    sequelize,
    modelName: "comercio",
  }
);
