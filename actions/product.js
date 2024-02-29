"use server";

import { convertErrors } from "@/utils/convert-errors";
import { newProductSchema } from "@/utils/schemas/new-product-schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const BASE_URL = process.env.PRODUCTS_BASE_URL;

export const getProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products`, {
            // next: { revalidate: 60 },
            // cache: "no-store",
            next: { tags: ["products"] },
        });

        if (!response.ok) throw new Error("Something went wrong!");

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

// CREATE PRODUCT

export const createProduct = async (prevState, formData) => {
    // const values = {
    //     title: formData.get("title"),
    //     description: formData.get("description"),
    //     price: formData.get("price"),
    //     category: formData.get("category"),
    //     imgUrl: formData.get("imgUrl"),
    // };
    const values = Object.fromEntries(formData.entries());

    let check = false;
    try {
        const validatedValues = newProductSchema.safeParse(values);

        if (!validatedValues.success) {
            return {
                message: "Something went wrong",
                errors: validatedValues.error?.issues
                    ? convertErrors(validatedValues.error.issues)
                    : { commonError: validatedValues.error?.message },
            };
        }
        const response = await fetch(`${BASE_URL}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(validatedValues.data),
        });

        if (!response.ok) throw new Error("Something went wrong!");

        console.log("VALUES: ", values);
        revalidatePath("/products");
        const data = await response.json();

        check = true;
        return data;
    } catch (error) {
        return {
            message: "Something went wrong",
            errors: { commonError: error.message },
        };
    } finally {
        if (check) {
            redirect("/products");
        }
    }
};