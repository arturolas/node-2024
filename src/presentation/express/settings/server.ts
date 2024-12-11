import { Connection } from "@database/Connection";
import { App } from "@settings/app";

async function main() {
  const dbConnection = new Connection();
  try {
    await dbConnection.initialize();
    const app = new App();
    await app.listen();
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
}

main();
