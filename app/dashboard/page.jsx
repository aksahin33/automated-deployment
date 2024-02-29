import { auth } from "@/auth";
import ClientAuth from "@/components/ClientAuth";
import { SessionProvider } from "next-auth/react";

export default async function DashboardPage() {
    const session = await auth();

    return (
        <SessionProvider session={session}>
            <ClientAuth />
        </SessionProvider>
    );
}