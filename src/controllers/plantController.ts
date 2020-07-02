import express from 'express'
import Plant from '../entities/Plant';
import { getRepository } from "typeorm";


export const addNewPlant = async (req: express.Request, res: express.Response) => {
    const plantRepository = getRepository(Plant); // you can also get it via getConnection().getRepository() or getManager().getRepository()
    try {

        console.log('*cant crate plants')
        res.json('plants');
    } catch (error) {   
        res.send(error);
    }
};

export const getPlants = async (req: express.Request, res: express.Response) => {
    const plantRepository = getRepository(Plant); // you can also get it via getConnection().getRepository() or getManager().getRepository()
    try {
   
    const plants = await plantRepository.query(`
        SELECT p.botanical_name, a.attribute_name, "attributeId"
        FROM plant p
        INNER JOIN plant_attributes_attribute paa
        ON p.id = "plantId"
        INNER JOIN "attribute" a
        ON a.id = "attributeId";
    `);

      console.log("*******plants", plants);
      res.json(plants);
    } catch (error) {
      res.send(error);
    }
};

// export const getPlantWithID = (req: express.Request, res: express.Response) => {
//     Plant.findById(req.params.PlantId, (err, Plant) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(Plant);
//     });
// }

// export const updatePlant = (req: express.Request, res: express.Response) => {
//     Plant.findOneAndUpdate({ _id: req.params.PlantId}, req.body, { new: true }, (err, Plant) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(Plant);
//     })
// }

// export const deletePlant = (req: express.Request, res: express.Response) => {
//     Plant.remove({ _id: req.params.PlantId }, (err, Plant) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json({ message: 'Successfully deleted Plant'});
//     })
// }