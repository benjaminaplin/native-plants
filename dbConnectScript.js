 try {
    const { Client } = require("pg");
    client = new Client({
      user: "postgres",
      host: "plant-finder-database-1.czg3s2hdax2l.us-west-2.rds.amazonaws.com",
      password: "%Fdsa5pos",
      port: 5432,
    });
  } catch (error) {
    console.error("Database error", error);
    client = null;
  }

client.connect();