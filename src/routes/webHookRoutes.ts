import { Router, Request, Response } from "express";
import { AppDataSource } from "../config/database";

const webHookRouter = Router();

webHookRouter.post("", async (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(`Received webhook for `, data);
    return res.json({ message: "Webhook received" });
  } catch (error) {
    res.status(503).json({
      status: "error",
      timestamp: new Date().toISOString(),
      database: "disconnected",
    });
  }
});

export default webHookRouter;
