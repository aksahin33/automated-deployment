import { fetchProducts, fetchUsers } from "@/actions/dummy";
import Data1 from "@/components/Data1";
import Data2 from "@/components/Data2";
import Skeleton from "@/components/Skeleton";
import { wait } from "@/utils/wait";
import { Suspense } from "react";

export const revalidate = 0;

export default async function SequentialPage() {
    // const data1 = await fetchProducts();
    // const data2 = await fetchUsers();

    // const [data1, data2] = await Promise.all([fetchProducts(), fetchUsers()]);

    return (
        <div>
            <h1>WATERFALL</h1>
            <p>This is the sequential page.</p>
            <Suspense fallback={<Skeleton height="100px" width="300px" />}>
                <Data1 />
            </Suspense>
            <br />
            <Suspense fallback={<Skeleton height="100px" width="300px" />}>
                <Data2 />
            </Suspense>
        </div>
    );
}
