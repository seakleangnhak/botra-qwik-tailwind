import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ProductDescription from "~/components/product/product-description";
import ProductItem from "~/components/product/product-item";

export default component$(() => {
    return (
        <div class="flex mt-4 justify-center max-w-screen-xl mx-auto gap-4">
            <div class="w-[400px]">
                <ProductItem />
            </div>
            <div class="min-w-[400px]">
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