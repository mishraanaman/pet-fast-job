const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

async function startServer() {
  const client = new MongoClient(uri, {
    serverApi: { version: ServerApiVersion.v1, strict: false, deprecationErrors: true },
  });

  try {
    // Connect once and reuse
    await client.connect();
    console.log("MongoDB connected!");

    // Define your DBs and collections
    const dbs = {
      moviesDB: client.db("sample_mflix"),
      //usersDB: client.db("users_db"),
    };

    const createApp = require("./app");
    const app = createApp(dbs); // pass all db references
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

startServer();
