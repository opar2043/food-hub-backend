import type { Application } from "express";
import express from "express";
import { auth } from "./auth";
import { toNodeHandler } from "better-auth/node";
import { mealsRouter } from "./module/meals/meals.route";
import { reviewRouter } from "./module/reviews/review.route";
import { orderEouter } from "./module/order/order.route";

const app: Application = express();

app.use(express.json());

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use("/api", mealsRouter);
app.use("/api", reviewRouter);
app.use("/api", orderEouter);

export default app;
