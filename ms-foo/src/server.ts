import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { schema } from './schema'

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({
  schema,
  healthCheckEndpoint: '/live',
  logging: 'info'
})

// Pass it into a server to hook into request handlers.
const server = createServer(yoga)

// Start the server and you're done!
server.listen(4002, () => {
  //console.info('Server is running on http://localhost:4002/graphql')
  console.info(`🚀 Server ready at http://localhost:4002`);
})
