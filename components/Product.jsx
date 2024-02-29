import Image from "next/image";
import Link from "next/link";

export default function Product({ product }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <Image
                src={product.imgUrl}
                width={300}
                height={400}
                className="card-img-top object-fit-cover"
            />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text text-danger fs-5">${product.price}</p>
                <Link
                    href={`/products/${product.id}`}
                    className="btn btn-outline-warning mt-auto">
                    Go To Product Details
                </Link>
            </div>
        </div>
    );
}