import ProductForm from "@/components/ProductForm";

export default function NewProductPage() {
    return (
        <div className="container">
            <h1 className="text-info my-5 text-center">CREATE NEW PRODUCT</h1>
            <ProductForm />
        </div>
    );
}