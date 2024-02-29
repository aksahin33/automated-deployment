import { fetchUsers } from "@/actions/dummy";

export default async function Data2() {
    const data2 = await fetchUsers();
    const user = data2.users[0];

    return (
        <div>
            <h2>
                {user.firstName} {user.lastName}
            </h2>
            <p>{user.birthDate}</p>
        </div>
    );
}
