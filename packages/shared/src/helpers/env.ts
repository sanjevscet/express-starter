import dotenv from "dotenv";
import { IEnv } from "../interfaces";
dotenv.config();

class EnvClass {
  public static config(): IEnv {
    const port = process.env.PORT ? +process.env.PORT : 8080;

    return {
      port
    };
  }
}

const Env = EnvClass.config();

export { Env };
