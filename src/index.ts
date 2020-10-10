// Copyright (c) 2020 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import { App } from "./App";
import { config } from "./config";
import { Home } from "./Controllers/Home";
import { HealthCheck } from "./Controllers/Healthcheck";

const { PORT } = config;

if (!PORT) {
  console.error("Error: A port must be provided");

  process.exit(1);
}

const middleWares = [helmet(), cors(), morgan("dev"), express.json()];

if (config.NODE_ENV === "development") {
  middleWares.push(morgan("dev"));
}

const app = new App({
  controllers: [new Home(), new HealthCheck()],
  middleWares: [helmet(), cors(), morgan("dev"), express.json()],
  port: PORT,
  assets: ["public"],
  templates: [],
});

app.listen();
