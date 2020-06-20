const express = require('express');

const PORT = 7000;

const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello word');
});

app.listen(PORT, HOST);