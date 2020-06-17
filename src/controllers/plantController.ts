import express from 'express'
// import { PlantSchema } from '../entities/plant';

// export const addNewPlant = (req, res) => {
//     let newPlant = new Plant(req.body);

//     newPlant.save((err, Plant) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(Plant);
//     });
// };

export const getPlants = (req: express.Request, res: express.Response) => {
         res.json({ yay: "plant" })
         // Plant.find({}, (err, Plant) => {
         //     if (err) {
         //         res.send(err);
         //     }
         //     res.json(Plant);
         // });
       };

// export const getPlantWithID = (req, res) => {
//     Plant.findById(req.params.PlantId, (err, Plant) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(Plant);
//     });
// }

// export const updatePlant = (req, res) => {
//     Plant.findOneAndUpdate({ _id: req.params.PlantId}, req.body, { new: true }, (err, Plant) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(Plant);
//     })
// }

// export const deletePlant = (req, res) => {
//     Plant.remove({ _id: req.params.PlantId }, (err, Plant) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json({ message: 'Successfully deleted Plant'});
//     })
// }