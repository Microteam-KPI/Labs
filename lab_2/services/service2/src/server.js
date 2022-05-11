"use strict";
import { CRUD } from "./crud.js";
import { Connection } from "./conection.js";
import { config } from "./config.js";
import express from "express";
let conect = new Connection();
let crud = new CRUD(conect, config);

const port = process.env["SERVICE2_SERVICE_SERVICE_PORT"];
const host = process.env["SERVICE2_SERVICE_SERVICE_PORT"];

const app = express();

app.use(express.json());
const urlencodedParser = express.urlencoded({ extended: false });

app.get("/", (req, res) => {
  res.send("Hello World from service 2");
});

app.post("/serfirst/get", urlencodedParser, async (request, response) => {
  try {
    let result = await crud.select(request.body.id);
    response.send({ status: "OK", data: result });
  } catch (error) {
    console.error(error);
    response.send({ status: "error" });
  }
});

app.post("/serfirst/insert", urlencodedParser, async (request, response) => {
  try {
    await crud.insert(request.body.id, request.body.name);
    response.send({ status: "OK" });
  } catch (error) {
    console.error(error);
    response.send({ status: "error" });
  }
});

app.post("/serfirst/delete", urlencodedParser, async (request, response) => {
  try {
    await crud.delete(request.body.id);
    response.send({ status: "OK" });
  } catch (error) {
    console.error(error);
    response.send({ status: "error" });
  }
});

app.post("/serfirst/update", urlencodedParser, async (request, response) => {
  try {
    await crud.update(request.body.id, request.body.name);
    response.send({ status: "OK" });
  } catch (error) {
    console.error(error);
    response.send({ status: "error" });
  }
});

app.listen(port, host);
console.log(`Hello from http://${host}:${port}`);
