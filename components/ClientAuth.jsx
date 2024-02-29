"use client";

import { useSession } from "next-auth/react";

export default function ClientAuth() {
    const { data: session } = useSession();
    console.log(session);

    return (
        <div>
            {session ? (
                <p>Logged in as {session.user.email}</p>
            ) : (
                <p>Not logged in</p>
            )}
        </div>
    );
}