import type { RequestHandler } from "express";
import { mealsservice } from "./meals.service";

const createMeals: RequestHandler = async (req, res, next) => {
  try {
    const result = await mealsservice.createMeals(req.body);

    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getMeals: RequestHandler = async (_req, res, next) => {
  try {
    const result = await mealsservice.getMeals();

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getsingleMeals: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;

    const result = await mealsservice.getsingleMeals(id as string);

    res.status(200).json({
      success: true,
      message : "meals find succesfull",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteMeals: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;

    const result = await mealsservice.deleteMeals(id as string);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateMeals: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;

    const result = await mealsservice.updateMeals(id as string, req.body);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const mealsController = {
  createMeals,
  getMeals,
  deleteMeals,
  updateMeals,
  getsingleMeals
};
