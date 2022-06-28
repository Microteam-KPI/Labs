"use strict";
import { CRUD } from "./crud.js";
import { Connection } from "./conection.js";
import { config } from "./config.js";
import express from "express";
let conect = new Connection();
let crud = new CRUD(conect, config);

const port = 8080;
const host = "0.0.0.0";

// const getRequestIpAddress = (request) => {
//     const headers = request.headers;
//     for (const header of IP_HEADERS) {
//         const value = headers[header];
//         if (value) {
//             const parts = value.split(/\s*,\s*/g);
//             return parts[0] ?? null;
//         }
//     }
//     const client = request.connection ?? request.socket ?? request.info;
//     if (client) {
//         return client.remoteAddress ?? null;
//     }
//     return null;
// };

const app = express();

app.use(express.json());
const urlencodedParser = express.urlencoded({ extended: false });

app.get("/", (req, res) => {
    console.log(`/ GET  status: OK`);
    res.send("Hello World from service 2");
});

app.post("/serfirst/get", urlencodedParser, async (request, response) => {
    try {
        let result = await crud.select(request.body.id);
        сonsole.log(`/serfirst/get POST  status: OK ${JSON.stringify(request.body)}`);
        response.send({ status: "OK", data: result });
    } catch (error) {
        сonsole.log(`/serfirst/get POST  status: error  ${error})}`);
        response.send({ status: "error" });
    }
});

app.post("/serfirst/insert", urlencodedParser, async (request, response) => {
    try {
        await crud.insert(request.body.id, request.body.name);
        console.log(`/serfirst/insert POST status: OK ${JSON.stringify(request.body)}`);
        response.send({ status: "OK" });
    } catch (error) {
        console.log(`/serfirst/insert POST  status: error  ${error})}`);
        response.send({ status: "error" });
    }
});

app.post("/serfirst/delete", urlencodedParser, async (request, response) => {
    try {
        await crud.delete(request.body.id);
        console.log(`/serfirst/delete POST status: OK ${JSON.stringify(request.body)}`);
        response.send({ status: "OK" });
    } catch (error) {
        console.log(`/serfirst/delete POST  status: error ${error}`);
        response.send({ status: "error" });
    }
});

app.post("/serfirst/update", urlencodedParser, async (request, response) => {
    try {
        await crud.update(request.body.id, request.body.name);
        console.log(`/serfirst/update POST status: OK ${JSON.stringify(request.body)}`);
        response.send({ status: "OK" });
    } catch (error) {
        console.log(`/serfirst/update POST status: error ${error}`);
        response.send({ status: "error" });
    }
});

app.listen(port, host);
console.log(`Hello from http://${host}:${port}`);
