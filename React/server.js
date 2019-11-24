const express = require('express');

const app = express();
// app.get (endpoint, stuff)
// app.get('/api/customers', (req, res) => { const data = [{}];});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));