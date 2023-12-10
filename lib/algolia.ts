import algoliasearch from "algoliasearch";

// Connect and authenticate with your Algolia app
const client = algoliasearch("LODOCO1MRH", "817015e9902a8df4e57968630f7acc42");

// Create a new index and add a record
const index = client.initIndex("products");

export { index };
