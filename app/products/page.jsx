import ProductList from "@/components/ProductList";
import Link from "next/link";

// export const revalidate = 60;

// optionally you can opt out of using cache at all
export const revalidate = 0;

export default function ProductsPage() {
    return (
        <div className="container my-5">
            <div className="d-flex justify-content-between">
                <h1 className="text-danger text-center">PRODUCTS</h1>
                <Link href="/products/new">
                    <button
                        type="button"
                        title="Go to create new product"
                        className="btn btn-primary">
                        NEW PRODUCT
                    </button>
                </Link>
            </div>
            <ProductList />
        </div>
    );
}