import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./config/database";

const PORT = process.env.API_PORT || 3000;

const startServer = async () => {
  try {
    // Initialize database connection with retry logic
    let retries = 5;
    while (retries > 0) {
      try {
        await AppDataSource.initialize();
        console.log("✅ Database connection established successfully");
        break;
      } catch (err) {
        retries -= 1;
        console.log(`⏳ Database connection failed. Retries left: ${retries}`);
        if (retries === 0) throw err;
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    }

    // Start Express server
    app.listen(PORT, () => {
      console.log(`🚀 GreenLine API server running on port ${PORT}`);
      console.log(`📍 Environment: ${process.env.NODE_ENV || "development"}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
