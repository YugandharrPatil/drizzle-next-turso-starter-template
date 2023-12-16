import { createClient } from "@libsql/client";
import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";

const connection = createClient({
	url: process.env.DATABASE_URL as string,
	authToken: process.env.DATABASE_AUTH_TOKEN as string,
});

export const db = drizzle(connection);
