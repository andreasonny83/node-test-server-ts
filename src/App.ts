// Copyright (c) 2020 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import express, { Application } from "express";

interface AppInit {
  /**
   * The port where your application will listen
   *
   * Example:
   *
   *    port: 3000
   *
   */
  port: number;

  /**
   * Define a list of Express middlewares
   *
   * Example:
   *
   *    middleWares: [
   *      helmet(),
   *      cors(),
   *      morgan("dev"),
   *      express.json(),
   *     ]
   *
   */
  middleWares: any[];

  /**
   * Define a list of Express controllers
   *
   * Example:
   *
   *    controllers: [
   *      new HomeController(),
   *      new HealthCheckController()
   *     ]
   *
   */
  controllers: any[];

  /**
   * Define a list of public assets
   *
   * Example:
   *
   *    assets: [ 'view', 'public' ]
   *
   */
  assets: string[];

  /**
   * Set an Express template Engine.
   *
   * Example:
   *
   *    templates: [ 'pug', 'mustache' ]
   *
   * Read more on: https://expressjs.com/en/resources/template-engines.html
   */
  templates: string[];
}

export class App {
  public app: Application;
  public port: number;

  constructor(appInit: AppInit) {
    this.app = express();
    this.port = appInit.port;

    this.middleWares(appInit.middleWares);
    this.routes(appInit.controllers);
    this.assets(appInit.assets);
    this.template(appInit.templates);
  }

  private middleWares(middleWares: any[]): void {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare);
    });
  }

  private routes(controllers: any[]): void {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  private assets(statics: string[]): void {
    statics.forEach((staticAsset) => {
      this.app.use(express.static(staticAsset));
    });
  }

  private template(templates: string[]): void {
    templates.forEach((template) => {
      this.app.set("view engine", template);
    });
  }

  public listen(): void {
    this.app.listen(this.port, (error?: any) => {
      if (error) {
        return console.error(error);
      }

      console.log(
        `\n⚡️ Server started at http://localhost:${this.port} in "%s" mode`,
        this.app.get("env")
      );
      console.log("   Press CTRL-C to stop\n");
    });
  }
}
