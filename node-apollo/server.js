import express from 'express';
import { resetCaches } from 'graphql-tag';

const app = express();
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(4000, () => console.log(`Express server running on port 4000`));