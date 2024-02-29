"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export const login = async (formData) => {
    const payload = {
        username: formData.get("username"),
        password: formData.get("password"),
    };
    try {
        await signIn("credentials", payload);
    } catch (error) {
        throw error;
    }
};

export const loginWithProvider = async (formData) => {
    const provider = formData.get("provider");
    console.log(provider);

    try {
        await signIn(provider);
    } catch (error) {
        if (error instanceof AuthError) {
            return {
                message: "Authentication was failed",
            };
        } else {
            throw error;
        }
    }
};
