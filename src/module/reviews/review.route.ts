import { Router } from "express";
import { reviewController } from "./review.controller";

const router = Router();
router.post("/reviews", reviewController.createReview);
router.get("/reviews", reviewController.getReview);
router.delete("/reviews/:id", reviewController.deleteReview);

export const reviewRouter = router;