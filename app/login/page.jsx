import LoginForm from "@/components/LoginForm";
import { IoLogoGithub } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { loginWithProvider } from "@/actions/login";

export default function LoginPage() {
    return (
        <div className="container my-5">
            <LoginForm />
            <div className="d-flex flex-column align-items-center gap-2">
                <form action={loginWithProvider}>
                    <input type="hidden" name="provider" value="github" />
                    <button className="btn btn-dark" type="submit">
                        Sign In With GitHub <IoLogoGithub />
                    </button>
                </form>
                <form action={loginWithProvider}>
                    <input type="hidden" name="provider" value="google" />
                    <button className="btn btn-light" type="submit">
                        Sign In With Google <FcGoogle />
                    </button>
                </form>
            </div>
        </div>
    );
}
