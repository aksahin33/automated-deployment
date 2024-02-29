import * as z from "zod";

export const newProductSchema = z.object({
    title: z.string().min(1, "Title is required").max(50, "Title is too long"),
    description: z
        .string()
        .min(1, "Description is required")
        .max(100, "Description is too long"),
    price: z.string().min(1, "Price is required"),
    category: z.string().min(1, "Category is required"),
    imgUrl: z.string().url("Invalid URL").min(1, "Image URL is required"),
});