import express from "express";
import { createConnection } from "typeorm";
import { User } from "./Entities/User";

const app = express();
const PORT = 3001;

createConnection({
  type: "mysql",
  database: "typeormtutorial",
  username: "root",
  password: "Anmol@mysql",
  logging: true,
  synchronize: true,
  entities: [User],
});

app.listen(PORT, () => {});
