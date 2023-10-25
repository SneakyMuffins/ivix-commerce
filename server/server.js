const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const path = require('path');
const { schema, root } = require('./routes/product');
const cors = require('cors');

const app = express();

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(cors({
  origin: '*', 
  credentials: true,
}));

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('GraphQL server is running at http://localhost:4000/graphql');
});
