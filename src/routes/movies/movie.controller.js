const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  serverApi: { version: ServerApiVersion.v1, strict: false, deprecationErrors: true },
});

const dbName = "sample_mflix";
const collectionName = "movies";

const searchMovies = async (req, res) => {
  const query = req.query.q || "";

  try {
    await client.connect();
    const collection = client.db(dbName).collection(collectionName);

    const results = await collection
      .aggregate([
        {
          $search: {
            index: "default", // Atlas search index
            text: { query, path: ["title"] },
          },
        },
        { $project: { title: 1, imdb: 1 } },
        { $limit: 10 },
      ])
      .toArray();

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching search results");
  } finally {
    await client.close();
  }
};

module.exports = { searchMovies };
