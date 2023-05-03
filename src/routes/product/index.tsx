import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ProductDescription from "~/components/product/product-description";
import ProductItem from "~/components/product/product-item";

export default component$(() => {
    return (
        <div class="md:flex mt-4 justify-center max-w-screen-xl md:mx-auto px-4 gap-4">
            <div class="md:w-[400px] mx-auto md:mx-0 my-2">
                <ProductItem />
            </div>
            <div class="md:min-w-[400px] mx-auto md:mx-0 my-2">
                <ProductDescription />
            </div>
        </div>
    )
})

export const head: DocumentHead = {
    title: 'Brand',
    meta: [
        {
            name: 'description',
            content: "Brand description",
        },
    ],
};