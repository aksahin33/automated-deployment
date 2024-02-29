"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const revalidateFetch = (tagName) => {
     revalidateTag(tagName);
};

export const revalidatePage = (pageName) => {
    revalidatePath(pageName);
};