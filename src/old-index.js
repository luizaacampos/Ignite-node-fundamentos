// importing express
const { request } = require('express');
const express = require('express');

// initializing express
const app = express();

// we nedd top tell express that we are using json
app.use(express.json())

// get function expects path and req, res with a return
// app.get("/", (request, response) => {
    // not used...
    // return response.send("Hello world!");
    // will return on json format in the browser
    // return response.json({ message: "Hello world Ignite!" });
// });

app.get("/courses", (request, response) => {
    const query = request.query;
    console.log(query);

    return response.json(["curso 1", "curso 2", "curso 3"]);
});

// browser just accept get, we need other methods to handle other requests
app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body);

    return response.json(["curso 1", "curso 2", "curso 3", "curso 4"]);
});

app.put("/courses/:id", (request, response) => {
    // const params = request.params;
    const { id } = request.params;

    console.log(id)

    return response.json(["curso 6", "curso 2", "curso 3", "curso 4"])
});

app.patch("/courses/:id", (request, response) => {
    return response.json(["curso 6", "curso 7", "curso 3", "curso 4"])
});

app.delete("/courses/:id", (request, response) => {
    return response.json(["curso 6", "curso 7", "curso 4"])
});

// starting application (on port 3333)
app.listen(3333);