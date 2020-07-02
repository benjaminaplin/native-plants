 try {
    const { Client } = require("pg");
    client = new Client({
      type: "postgres",
      host: "localhost",
      port: 5432,
      user: "postgres",
      password: "%Fdsa5pos",
      database: "postgres",
    });
  } catch (error) {
    console.error("Database error", error);
    client = null;
  }

client.connect();