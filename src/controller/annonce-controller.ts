import { Router } from "express";
import { annonceRepository } from "../repository/annonce-repository";
import { checkId } from "../middleware";
import Joi from "joi";

export const annonceController = Router();

annonceController.get("/", async (req, res) => {
  const annonces = await annonceRepository.findAll();
  res.json(annonces);
});

annonceController.get("/id/:id", checkId, async (req, res) => {
  const annonce = await annonceRepository.findById(req.params.id);
  if (!annonce) {
    res.status(404).end("Not Found");
    return;
  }
  res.json(annonce);
});

annonceController.post("/", async (req, res) => {
  const validation = annonceValidation.validate(req.body, { abortEarly: false });
  if (validation.error) {
    res.status(400).json(validation.error);
    return;
  }
  if (await annonceRepository.findById(req.body._id)) {
    res.status(400).json({ error: "annonce already exist" });
    return;
  }
  const annonce = await annonceRepository.persist(req.body);
  res.status(201).json(annonce);
});

annonceController.delete("/:id", checkId, async (req, res) => {
  await annonceRepository.remove(req.params.id);
  res.status(204).end();
});

annonceController.patch("/:id", checkId, async (req, res) => {
  const validation = annoncePatchValidation.validate(req.body, {
    abortEarly: false,
  });
  if (validation.error) {
    res.status(400).json(validation.error);
    return;
  }
  await annonceRepository.update(req.params.id, req.body);
  res.json(req.body);
});


const annonceValidation = Joi.object({
  name : Joi.string().required(),
  type: Joi.string().required(),
  description: Joi.string().required(),
  adresse: Joi.string().required(),
  status:Joi.boolean().required(),
  User: Joi.object({
      name : Joi.string().required(),
  })
  });


const annoncePatchValidation  = Joi.object({
name : Joi.string(),
type: Joi.string(),
description: Joi.string(),
adresse: Joi.string(),
status:Joi.boolean(),
User: Joi.object({
    name : Joi.string(),
})
});


