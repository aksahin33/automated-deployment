import { login } from "@/actions/login";

export default function LoginForm() {
    return (
        <form action={login}>
            <div className=" mb-3">
                <label htmlFor="username" className="form-label">
                    Username
                </label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    className="form-control"
                />
            </div>
            <div className=" mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    className="form-control"
                />
            </div>
            <button type="submit" className="btn btn-info">
                LOGIN
            </button>
        </form>
    );
}
