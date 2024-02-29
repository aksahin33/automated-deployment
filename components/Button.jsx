"use client";

import { revalidateFetch, revalidatePage } from "@/actions/revalidate";

export default function Button({ title }) {
    const handleClick = () => {
        // "use server"
        // revalidateFetch("products");
        revalidatePage("/products");
    };

    return (
        <button className="btn btn-outline-primary w-50" onClick={handleClick}>
            {title}
        </button>
    );
}