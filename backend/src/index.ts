import { createApolloServer } from "./server.js";

createApolloServer({ port: 3001 }, "mongodb://localhost:27017/MovieDB").then(
    ({ url }) => {
        console.log(`🚀 Server ready at: ${url}`);
    }
);
