"use client";
import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";

// TODO(Bhaskar): you can move this client into different file

const client = new ApolloClient({
  uri: "http://localhost:3000/v1/graphql",
  cache: new InMemoryCache(),
});
const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id 
      name
      description
    }
  }
`;
export default async function Home() {
  const { data } = await client.query({ query: GET_PRODUCTS });
  const products = data.products;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-medium mb-6">Popular Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((item) => {
              return (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden gap-6">
                  <img
                    src="/images/book.jpg"
                    className="w-full h-48 object-cover"
                    alt="Product 1"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-4">{item.name}</h3>

                    <p className="text-gray-500 mb-6">
                      {item.description}
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
