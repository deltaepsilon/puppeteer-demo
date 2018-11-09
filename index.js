const express = require('express');
const app = express();
const { helloWorld } = require('./server/routers');
const port = 4040;

app.use(express.static('public'));

app.use(helloWorld);

app.get('/health-check', (req, res) => {
  res.sendStatus(200);
});

app.listen(4040, () => console.log(`listening on port ${port}`));
