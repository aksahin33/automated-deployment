import { getProducts } from "@/actions/product";
import Product from "@/components/Product";
import Button from "@/components/Button";

export default async function ProductList() {
    // after 60 seconds ignore the cache anymore, whenever a new page request is made just go fetch it from the server
    const data = await getProducts();

    return (
        <div className="container my-5">
            <div className="row justify-content-center gap-2">
                {data.map((product, index) => (
                    <Product key={index} product={product} />
                ))}
                <Button />
            </div>
        </div>
    );
}