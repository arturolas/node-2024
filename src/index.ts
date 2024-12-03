// import app from './app';
import { AppDataSource } from "./db/conexion";
import { App } from "./app";

async function main() {
  try {
    await AppDataSource.initialize();
    const app = new App();
    await app.listen();
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
}

main();
