import "reflect-metadata";
import dotenv from "dotenv";
import app from "./app";
import dataSource from "./db";

dotenv.config();

const PORT = parseInt(process.env.PORT ?? "", 10);

if (isNaN(PORT) || PORT < 0 || PORT >= 65536) {
    throw new RangeError(`Invalid port number: ${PORT}`);
}

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