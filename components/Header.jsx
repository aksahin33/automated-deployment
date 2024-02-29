import Link from "next/link";
import UserInformation from "./UserInformation";

export default function Header() {
    return (
        <nav className="navbar navbar-expand bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand">
                    PRODUCTS MANAGEMENT
                </Link>
                <div
                    className="navbar-collapse justify-content-end collapse"
                    id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/products" className="nav-link">
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/sequential" className="nav-link">
                                Sequential
                            </Link>
                        </li>
                        <UserInformation/>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
