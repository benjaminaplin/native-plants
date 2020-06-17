import express from 'express';
import bodyParser from 'body-parser';
import { connectToDb } from './src/connectToDb';
import routes from './src/routes'
const app = express();
const PORT = 3000;


// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connectToDb()
app.use(express.static('public'));
routes(app)
app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);