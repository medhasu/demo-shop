import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";
import { Products } from "../../../data/products.ts";
const products = new Products();
const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
  }
  
  type Mutation {
    addProduct(name: String!, description: String!, price: Float!): Product
  }
  
   type Query {
    products: [Product!]!
  }
`;

const resolvers = {
  Mutation: {
    addProduct: (_, { name, description, price }) => {
      const newProduct = products.create({
        name,
        description,
        price,
      });
      return newProduct;
    },
  },
  Query: {
    products: () => {
      return products.find();
    },
  },
};

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
