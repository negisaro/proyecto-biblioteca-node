const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'libro',
    password: 'admin123',
    database: 'libreria_nobel',
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
