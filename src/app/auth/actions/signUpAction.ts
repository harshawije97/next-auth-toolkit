/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import * as z from "zod";
import { RegisterSchema } from "../utils/validationSchema";
import bcrypt from "bcrypt";
import { findUserByEmailAsync } from "../query/findUserByEmailAsync";
import { createNewUserAsync } from "../query/createNewUserAsync";

export const signUpAction = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values);
    if (!validateFields.success) {
        return { error: "Invalid fields!" };
    }

    const { name, email, password } = validateFields.data;

    // hash password
    const hashPassword = await bcrypt.hash(password, 10);
    // check if the email already exists
    const user = await findUserByEmailAsync(email);
    if (user) {
        return { error: "Email already exists!" };
    }

    // create user
    const response = await createNewUserAsync({ name, email, password: hashPassword });
    if (response.error) {
        return { error: response.error };
    }

    // TODO: send verification email

    return { success: "Registration successful" }
};