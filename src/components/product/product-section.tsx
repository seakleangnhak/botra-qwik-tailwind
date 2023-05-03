import { component$ } from "@builder.io/qwik";
import ProductItem from "./product-item";

export default component$(() => {
    return (
        <>
            <h5 class="text-blue-800 underline underline-offset-[12px] mt-4">Title</h5>
            <div class="mt-4 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </>
    )
})