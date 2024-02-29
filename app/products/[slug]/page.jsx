export default async function ProductDetailsPage({ params }) {
    const { slug } = params;

    const response = await fetch(
        `${process.env.PRODUCTS_BASE_URL}/products/${slug}`
    );

    const product = await response.json();

    return (
        <div className="container my-5">
            <h1>PRODUCT DETAILS - {product.id}</h1>
            <h2>{product.title}</h2>
            <h3>{product.description}</h3>
            <h3 className="text-danger">${product.price}</h3>
        </div>
    );
}