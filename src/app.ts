import type { Application } from "express"
import express from 'express'
import { auth } from "./auth";
import { toNodeHandler } from "better-auth/node";
const app : Application= express();

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());
export default app