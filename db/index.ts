import { Sequelize } from "sequelize";
export const sequelize = new Sequelize(
  "postgres://fhzfebtg:WDdeunGPImrpsUQ-qOZtw0ioZGGH-Efp@silly.db.elephantsql.com/fhzfebtg"
);

// try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
// }
