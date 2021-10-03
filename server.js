 const express = require('express');
 const server = express();
 const path = require('path');

 server.use(express.static(path.join(__dirname, "./build")))