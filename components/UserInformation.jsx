import { logout } from "@/actions/logout";
import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";

export default async function UserInformation() {
    const session = await auth();

    return session?.user?.image ? (
        <div className="d-flex align-items-center gap-2">
            <div
                className="rounded-circle d-flex align-items-center bg-white"
                style={{ padding: "2px" }}>
                <Image
                    title={session?.user?.email}
                    src={session?.user?.image}
                    alt={session?.user?.email}
                    width={30}
                    height={30}
                    className="rounded-circle"
                />
            </div>
            <form action={logout}>
                <button type="submit" className="btn btn-outline-danger">
                    SIGN OUT
                </button>
            </form>
        </div>
    ) : (
        <Link href="/login">
            <button className="btn btn-outline-warning" type="button">
                SIGN IN
            </button>
        </Link>
    );
}
