import { graphqlLambda } from 'apollo-server-lambda';
import schema from './src/schema';

exports.graphqlHandler = function graphqlHandler(event, context, callback) {
  function callbackWithHeaders(error, output) {
    // eslint-disable-next-line no-param-reassign
    output.headers['Access-Control-Allow-Origin'] = '*';
    callback(error, output);
  }

  const handler = graphqlLambda({ schema: schema });
  return handler(event, context, callbackWithHeaders);
};