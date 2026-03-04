import { Router, Request, Response } from "express";
import { AppDataSource } from "../config/database";

const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    const isDbConnected = AppDataSource.isInitialized;
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      database: isDbConnected ? "connected" : "disconnected",
    });
  } catch (error) {
    res.status(503).json({
      status: "error",
      timestamp: new Date().toISOString(),
      database: "disconnected",
    });
  }
});

export default router;
