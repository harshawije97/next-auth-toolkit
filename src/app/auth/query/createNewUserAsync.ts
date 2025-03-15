import { db } from "@/db/db";

type User = {
    name: string;
    email: string;
    password: string;
};

export const createNewUserAsync = async (data: User) => {
    try {
        await db.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
            },
        });
        return { success: "Registration successful" };
    } catch (error) {
        return { error: "Server Error: Something went wrong. Please try again later.", message: JSON.stringify(error) };
    }
};