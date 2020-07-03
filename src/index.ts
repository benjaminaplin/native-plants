import express from 'express';
import bodyParser from 'body-parser';
import { connectToDb } from './connectToDb';
import routes from './routes'
const app = express();
const PORT = 3001;

const initApp = async () => {
    // bodyparser setup
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
    await connectToDb()
    app.use(express.static('public'));
    routes.forEach(route => {
        route(app)
    })
    app.get('/', (req, res) =>
        res.send(`Node and express server is running on port ${PORT}`)
    );
    
    app.listen(PORT, () =>
        console.log(`your server is running on port ${PORT}`)
    );
}

initApp()