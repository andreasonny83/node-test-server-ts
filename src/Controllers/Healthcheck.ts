// Copyright (c) 2020 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Request, Response, Router } from "express";
import { ControllerBase } from "../typings";

export class HealthCheck implements ControllerBase {
  public path = "/";
  public router = Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get("/healthcheck", this.index);
  }

  index = (req: Request, res: Response) => {
    res.status(200).json({
      status: "ok",
      uptime: process.uptime(),
    });
  };
}
