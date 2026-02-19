import type { RequestHandler } from "express";
import { reviewService } from "./review.service";

const createReview: RequestHandler = async (req, res) => {
  try {
    const body = req.body;
    const result = await reviewService.createReview(body);
    res.status(200).json({
      success: true,
      message: "review has been given",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something has been wrong",
    });
  }
};
const getReview: RequestHandler = async (req, res) => {
  try {
    const result = await reviewService.getReview();
    res.status(200).json({
      success: true,
      message: "review retrive succesfull",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something has been wrong",
    });
  }
};
const deleteReview: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id as string;
    const result = await reviewService.deleteReview(id);
    res.status(200).json({
      success: true,
      message: "review deleted",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something has been wrong",
    });
  }
};

export const reviewController = {
  createReview,
  deleteReview,
  getReview,
};
