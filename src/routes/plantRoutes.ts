import express from 'express'
import { 
    // addNewPlant, 
    getPlants, 
    // getPlantWithID, 
    // updatePlant,
    // deletePlant 
} from '../controllers/plantController';

const PlantRoutes = (app: express.Application) => {
    app.route('/plants')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getPlants)
    
    // POST endpoint
    // .post(addNewPlant);

    // app.route('/Plant/:PlantId')
    // // get specific Plant
    // .get(getPlantWithID)
    
    // // put request
    // .put(updatePlant)

    // // delete request
    // .delete(deletePlant);
}

export default PlantRoutes;
