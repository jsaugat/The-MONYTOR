import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet()); // Improve security by setting various HTTP headers (using the 'helmet' middleware)
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); // Configure Cross-Origin Resource Policy to allow cross-origin requests
app.use(morgan("common")); // Log HTTP requests to the console (using the 'morgan' middleware)
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(bodyParser.urlencoded({ extended: false })); // Parse incoming URL-encoded requests
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS) for the Express app

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("🟢 SUCCESS :: MONGODB CONNECTED");
      console.log("👁️  Watching on port http://localhost:" + PORT);
    });
  })
  .catch((error) => {
    console.log("ERROR 🔴 :: MONGODB NOT CONNECTED", error);
  });
