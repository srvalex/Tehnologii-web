const port = 8080;

const express = require('express');

const aplicatie = express();


aplicatie.use(express.json());

aplicatie.get("/",(cerere,raspuns) => {raspuns.send("Neata neata!");});

aplicatie.listen(port,() => {console.log("AAAAAAAAA");});