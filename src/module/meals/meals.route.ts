import { Router } from "express";
import { mealsController } from "./meals.controller";

const router = Router();

router.post("/meals", mealsController.createMeals);
router.get("/meals", mealsController.getMeals);
router.get("/meals/:id", mealsController.getsingleMeals);
router.patch("/meals/:id", mealsController.updateMeals);
router.delete("/meals/:id", mealsController.deleteMeals);

export const mealsRouter = router;
