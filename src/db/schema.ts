import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

/**
 * This is a sample schema.
 * Replace this with your own schema and then run migrations.
 */

export const users = sqliteTable("users", {
	id: integer("id").primaryKey(),
	fullName: text("full_name"),
	phone: text("phone"),
});

export const posts = sqliteTable("posts", {
	id: integer("id").primaryKey(),
	title: text("title"),
	likes: int("likes"),
	userId: int("userId"),
});
