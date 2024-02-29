import { fetchProducts } from "@/actions/dummy";

export default async function Data1() {
    const data1 = await fetchProducts();
    const product = data1.products[0];

    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
        </div>
    );
}
