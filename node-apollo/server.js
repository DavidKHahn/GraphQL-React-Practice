import express from 'express';
import schema from './schema';

const app = express();

schema.applyMiddleware({
    app: app
});
// app.use('/graphiql', graphiqlExpress({
//     endpointURL: '/graphql'
// }));
schema.applyMiddleware({
    app: app
});
// app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

app.listen(4000, () => console.log(`Express server running on port 4000`));

export default app;