import { Router } from "express";
import { orderController } from "./order.controller";

const router = Router();
router.post("/orders", orderController.createOrder);
router.get("/orders", orderController.getOrder);
router.delete("/orders/:id", orderController.deleteOrder);
router.patch("/orders/:id", orderController.updateOrder);

export const orderEouter = router;