"use client";

import { createProduct } from "@/actions/product";
import { useFormState } from "react-dom";

export default function ProductForm() {
    const [state, dispatch] = useFormState(createProduct, {
        message: null,
        errors: {},
    });
    console.log(state);

    return (
        <form action={dispatch}>
            {/* TITLE */}
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Title
                </label>
                <input
                    id="title"
                    name="title"
                    className="form-control"
                    type="text"
                />
                <p className="text-danger" style={{ fontSize: "0.8rem" }}>
                    {state?.errors?.title}
                </p>
            </div>
            {/* DESCRIPTION */}
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <input
                    id="description"
                    name="description"
                    className="form-control"
                    type="text"
                />
                <p className="text-danger" style={{ fontSize: "0.8rem" }}>
                    {state?.errors?.description}
                </p>
            </div>
            {/* PRICE */}
            <div className="mb-3">
                <label htmlFor="price" className="form-label">
                    Price
                </label>
                <input
                    id="price"
                    name="price"
                    className="form-control"
                    type="number"
                />
                <p className="text-danger" style={{ fontSize: "0.8rem" }}>
                    {state?.errors?.price}
                </p>
            </div>
            {/* CATEGORY */}
            <div className="mb-3">
                <label htmlFor="category" className="form-label">
                    Category
                </label>
                <input
                    id="category"
                    name="category"
                    className="form-control"
                    type="text"
                />
                <p className="text-danger" style={{ fontSize: "0.8rem" }}>
                    {state?.errors?.category}
                </p>
            </div>
            {/* IMGURL */}
            <div className="mb-3">
                <label htmlFor="imgUrl" className="form-label">
                    Image URL
                </label>
                <input
                    id="imgUrl"
                    name="imgUrl"
                    className="form-control"
                    type="url"
                />
                <p className="text-danger" style={{ fontSize: "0.8rem" }}>
                    {state?.errors?.imgUrl}
                </p>
            </div>
            <button type="submit" className="btn btn-danger">
                CREATE PRODUCT
            </button>
        </form>
    );
}
