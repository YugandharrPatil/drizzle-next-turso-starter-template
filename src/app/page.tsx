import { db } from "@/db";
import { users } from "@/db/schema";

export default async function HomePage() {
	const dbUsers = await db.select().from(users);

	const createUser = async (data: FormData) => {
		"use server";

		await db.insert(users).values({ fullName: "John Doe" });
	};
	return (
		<>
			<h1>All Users</h1>
			{dbUsers.map((users) => (
				<h3 key={users.id}>{users.fullName}</h3>
			))}

			<form action={createUser}>
				<button>Create User</button>
			</form>
		</>
	);
}
