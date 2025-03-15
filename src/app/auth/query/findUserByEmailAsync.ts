import { db } from "@/db/db";

export const findUserByEmailAsync = async (email: string) => {
    const user = await db.user.findUnique({ where: { email } });
    return user;
};