import "reflect-metadata";

import app from "./app";
import dataSource from "./db";

const PORT = process.env.PORT ?? 3000;

async function main() {
  try {
    await dataSource.initialize();

    app.listen(PORT, () => {
      console.log(`Application running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
