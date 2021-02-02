import { Request, Response, NextFunction } from "express";

import log from "../utils/logging";

export default function loggingMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  log.info("loggingMiddleware", `${req.ip} - ${req.path}`, false);
  next();
}
