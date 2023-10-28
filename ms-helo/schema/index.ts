const path = require("path");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
//const { makeExecutableSchema } = require("@graphql-tools/schema");
const { buildSubgraphSchema } = require('@apollo/subgraph');

const typesArray = loadFilesSync(path.join(__dirname), {
    extensions: ["graphql"],
  });
  const typeDefs = mergeTypeDefs(typesArray);

  const resolversArray = loadFilesSync(path.join(__dirname), {
    extensions: ["js"],
  });
  const resolvers = mergeResolvers(resolversArray);

/*
  export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
 */

export const schema = buildSubgraphSchema([{
  typeDefs,
  resolvers
}]);
