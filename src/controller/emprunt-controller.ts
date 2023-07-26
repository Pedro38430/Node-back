import { Router } from "express";
import { empruntRepository } from "../repository/emprunt-repository";
import { checkId } from "../middleware";
import Joi from "joi";

export const empruntController = Router();

empruntController.get("/", async (req, res) => {
  const emprunts = await empruntRepository.findAll();
  res.json(emprunts);
});

empruntController.get("/id/:id", checkId, async (req, res) => {
  const emprunt = await empruntRepository.findById(req.params.id);
  if (!emprunt) {
    res.status(404).end("Not Found");
    return;
  }
  res.json(emprunt);
});

empruntController.post("/", async (req, res) => {
  const validation = empruntValidation.validate(req.body, { abortEarly: false });
  if (validation.error) {
    res.status(400).json(validation.error);
    return;
  }
  if (await empruntRepository.findById(req.body._id)) {
    res.status(400).json({ error: "emprunt already exist" });
    return;
  }
  const emprunt = await empruntRepository.persist(req.body);
  res.status(201).json(emprunt);
});

empruntController.delete("/:id", checkId, async (req, res) => {
  await empruntRepository.remove(req.params.id);
  res.status(204).end();
});

empruntController.patch("/:id", checkId, async (req, res) => {
  const validation = empruntPatchValidation.validate(req.body, {
    abortEarly: false,
  });
  if (validation.error) {
    res.status(400).json(validation.error);
    return;
  }
  await empruntRepository.update(req.params.id, req.body);
  res.json(req.body);
});

const empruntValidation = Joi.object({
    demande : Joi.string().required(),
    Date: Joi.date().required(),
    status: Joi.string().required(),
    User: Joi.object({
        name : Joi.string(),
    })
    });
    
const empruntPatchValidation = Joi.object({
        demande : Joi.string(),
        Date: Joi.date(),
        status: Joi.string(),
        User: Joi.object({
        name : Joi.string(),
})
});



