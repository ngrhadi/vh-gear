import { ApolloServer } from 'apollo-server-micro';
import { NextApiRequest, NextApiResponse } from 'next';
import { typeDefs } from '../../graphql/schema';
import { resolvers } from '../../graphql/resolver';

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const stratServer = server.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD'
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await stratServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
}
