import express from "express";
import {
  endShake,
  getShakeConfig,
  getShakeCount,
  startShake
} from "../controllers/shake.js";
import { basicMiddleware, sessionMiddleware } from "../middleware/index.js";

export const shakeRouter = express.Router();

shakeRouter.get("/config", getShakeConfig);

// usersRouter.patch("/:telegramId/claim-refer", claimRefer);
shakeRouter.use(basicMiddleware);
shakeRouter.get("/", getShakeCount);

shakeRouter.post("/start", startShake);
shakeRouter.post("/end", sessionMiddleware, endShake);
