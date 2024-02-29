import { logout } from "@/actions/logout";
import { auth } from "@/auth";
import Image from "next/image";

export default async function UserInformation() {
    const session = await auth();

    return session?.user?.image ? (
        <div className="d-flex gap-2">
            <div className="rounded-circle bg-white p-1">
                <Image
                    title={session?.user?.email}
                    src={session?.user?.image}
                    alt={session?.user?.email}
                    width={30}
                    height={30}
                />
            </div>
            <form action={logout}>
                <button type="submit" className="btn btn-outline-danger">
                    SIGN OUT
                </button>
            </form>
        </div>
    ) : (
        <div>
            <button className="btn btn-outline-warning">SIGN IN</button>
        </div>
    );
}