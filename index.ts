import * as express from "express";
import { sequelize } from "./db";
import { Comercio } from "./db/comercio";
import { index } from "./lib/algolia";

// sequelize.sync({ force: true }).then((res) => {
//   console.log(res);
// });

const app = express();
app.use(express.json());
const port = 3002;

app.post("/comercios", async (req, res) => {
  const newComercio = await Comercio.create(req.body);
  const algoliaRes = index.saveObject({
    objectID: newComercio.get("id"),
    name: newComercio.get("name"),
    _geoloc: {
      lat: newComercio.get("lat"),
      lng: newComercio.get("lng"),
    },
  });
  res.json(newComercio);
});
app.get("/comercios", async (req, res) => {
  const todos = await Comercio.findAll({});
  res.json(todos);
});
app.get("/comercios/:id", async (req, res) => {
  const comercio = await Comercio.findByPk(req.params.id);
  res.json(comercio);
});
app.put("/comercios/:id", async (req, res) => {
  const comercio = await Comercio.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  const objectData = req.body;
  objectData.objectID = req.params.id;
  const algoliaRes = await index.partialUpdateObject(objectData);
  res.json(comercio);
});

app.listen(port, () => console.log("escuchando puerto" + port));
