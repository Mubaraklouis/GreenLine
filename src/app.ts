import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import healthRoutes from "./routes/healthRoutes";

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (_req, res) => {
  res.json({
    message: "🚀 GreenLine API is running!",
    version: "1.0.0",
    endpoints: {
      health: "/api/health",
    },
  });
});

app.use("/api/health", healthRoutes);

export default app;
