import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { seedMoods } from "./seedMoods";

export function initApi() {
  dotenv.config();
  const port = process.env.PORT || 4000;

  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch(err => console.error("connection error to DB:", err));

  const withSeed = process.env.WITH_SEED || true;
  if (withSeed) seedMoods();

  const api = express();
  api.use(cors());
  api.use(express.json());

  api.listen(port, () => {
    console.log(`API STARTED ON ${port} PORT`);
  });

  return api;
}
