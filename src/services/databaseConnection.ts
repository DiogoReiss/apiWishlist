import mongoose from "mongoose";
import dotenv from "dotenv";

import log from "../utils/logging";

dotenv.config();

interface iConnectOptions {
  loggerLevel?: string;
  useNewUrlParser?: boolean;
  useUnifiedTopology: boolean;
}

const connectOptions: iConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const url = process.env.MONGODBURL;

export const connectDB = () => {
  mongoose.connect(url || "", connectOptions);

  const connect: mongoose.Connection = mongoose.connection;

  // loggers
  connect.on("connecting", () => {
    log.info("MongoDB", "connecting");
  });

  connect.on("error", (error) => {
    log.error("MongoDB", `${error}`);
    mongoose.disconnect();
  });

  connect.on("connected", () => {
    log.info("MongoDB", "connected");
  });

  connect.once("open", () => {
    log.info("MongoDB", "connection opened");
  });

  connect.on("reconnected", () => {
    log.warning("MongoDB", "reconnected");
  });

  connect.on("reconnectFailed", () => {
    log.error("MongoDB", "reconnect failed");
  });

  connect.on("disconnected", () => {
    log.warning("MongoDB", "disconnected");
  });
};
