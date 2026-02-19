import type { RequestHandler } from "express";
import { orderService } from "./order.service";

const createOrder: RequestHandler = async (req, res) => {
  try {
    const body = req.body;
    const result = await orderService.createOrder(body);
    res.status(200).json({
      success: true,
      message: "order posted",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something has been wrong",
    });
  }
};
const getOrder: RequestHandler = async (req, res) => {
  try {
    const result = await orderService.getOrder();
    res.status(200).json({
      success: true,
      message: "order retrive succesfull",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something has been wrong",
    });
  }
};
const deleteOrder: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id as string;
    const result = await orderService.deleteOrder(id);
    res.status(200).json({
      success: true,
      message: "order deleted",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something has been wrong",
    });
  }
};
const updateOrder: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id as string;
    const body = req.body;
    const result = await orderService.updateOrder(id, body);
    res.status(200).json({
      success: true,
      message: "order updated",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something has been wrong",
    });
  }
};

export const orderController = {
  createOrder,
  getOrder,
  deleteOrder,
  updateOrder,
};
