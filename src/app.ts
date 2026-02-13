import type { Application } from "express"
import express from 'express'
const app : Application= express();
app.use(express.json());
export default app