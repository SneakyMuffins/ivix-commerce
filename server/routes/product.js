const fs = require("fs");
const { buildSchema } = require("graphql");
const path = require("path");

const productData = JSON.parse(
  fs.readFileSync("./data/products.json", "utf-8")
);

const schema = buildSchema(
  fs.readFileSync(path.join(__dirname, "../schema/product.graphql"), "utf-8")
);

const root = {
  products: () => productData,
};

module.exports = { schema, root };
