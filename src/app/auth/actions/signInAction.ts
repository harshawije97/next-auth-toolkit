/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import * as z from "zod";
import { LoginSchema } from "../utils/validationSchema";

export const signInAction = async (values: z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values);
    if (!validateFields.success) {
        return { error: "Invalid email or password" };
    }

    return { success: "Login successful" }
};