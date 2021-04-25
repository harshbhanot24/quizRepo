import express from "express";
import router from "./routes";
import http from "http";
import cors from "cors";
import morgan from "morgan";
const config = require('config');

class App {
  public app: express.Application;
  public port: string;
 private constructor(port = '3000') {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
  }

  initializeMiddlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(morgan("short"));
    this.app.use(router);
   }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
new App(process.env.PORT).listen()
export default App;


