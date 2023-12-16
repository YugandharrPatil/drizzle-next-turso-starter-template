import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";
import { db } from "./index";

async function main() {
	try {
		await migrate(db, {
			migrationsFolder: "./src/db/migrations",
		});
		console.log("Tables migrated!");
		process.exit(0);
	} catch (err) {
		console.error("Error performing migrations: ", err);
		process.exit(1);
	}
}

main();
