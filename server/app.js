const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const dotenv = require("dotenv");
const connectDB = require("./db");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// call connectDB() to connect to DB
connectDB();

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening for requests on port 4000");
});
