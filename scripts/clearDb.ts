import { Client } from "pg";

async function clearDb() {
  const client = new Client({
    // connectionString: process.env.DATABASE_URI,
    user: 'root',
    password: 'root',
    database: 'general',
    port: 5432,
  });

  await client.connect();
  await client.query("DROP DATABASE general;")

  await client.end();
}

clearDb()