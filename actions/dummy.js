"use server";

import { wait } from "@/utils/wait";

export const fetchProducts = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok)
            throw new Error("There was a problem fetching the products.");

        const data = await response.json();
        await wait(2000);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchUsers = async () => {
    try {
        const response = await fetch("https://dummyjson.com/users");

        if (!response.ok)
            throw new Error("There was a problem fetching the users.");

        const data = await response.json();
        await wait(4000);
        return data;
    } catch (error) {
        console.log(error);
    }
};