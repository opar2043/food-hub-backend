import type { RequestHandler } from "express";
import { mealsservice } from "./meals.service";

const createMeals: RequestHandler = async (req, res) => {
  const payload = req.body;
  const result = await mealsservice.createMeals(payload);

  res.status(201).json({
    success: true,
    data: result,
  });

};

export const mealsController = {
  createMeals,
};
