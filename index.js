const express = require('express');
const routerApi = require('./routes/index');

const app = express();
const port = process.env.port || 3200;

app.use(express.json());
routerApi(app);


app.listen(port, () => {
  console.log('Mi port' + port);
});
