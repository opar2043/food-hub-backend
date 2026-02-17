import type { Application } from "express";
import express from "express";
import { auth } from "./auth";
import { toNodeHandler } from "better-auth/node";
import { mealsRouter } from "./module/meals/meals.route";

const app: Application = express();

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());

app.use("/api/v1", mealsRouter);

export default app;
