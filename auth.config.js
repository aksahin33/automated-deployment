import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

// jissetts
// ePawWgrnZR8L

export const config = {
    providers: [
        Credentials({
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                console.log("CREDENTIALS :", credentials);

                const response = await fetch(
                    "https://dummyjson.com/auth/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(credentials),
                    }
                );

                if (!response.ok) return null;

                const user = await response.json();

                return user;
            },
        }),
        Google,
        GitHub,
    ],
    callbacks: {
        authorized({ request, auth }) {
            const { pathname } = request.nextUrl;
            const isLoggedIn = !!auth?.user;
            // const isExpired = new Date(auth?.expires) < new Date();

            // check if the path starts with login and the user is logged in then redirect to dashboard otherwise show the login page
            if (pathname.startsWith("/login")) {
                if (isLoggedIn)
                    return Response.redirect(
                        new URL("/dashboard", request.nextUrl)
                    );

                return false;
            }

            if (pathname === "/sequential") {
                return false;
            }

            if (pathname === "/dashboard") {
                if (!isLoggedIn) return false;

                return true;
            }

            return true;
        },
    },
    pages: {
        signIn: "/login",
    },
};
