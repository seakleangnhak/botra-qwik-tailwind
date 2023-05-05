import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import ProductDescription from "~/components/product/product-description";
import ProductItem from "~/components/product/product-item";

export const useProductData = routeLoader$(async (requestEvent) => {
    const res = await fetch("https://botracomputer.com/server/api/product.php/" + requestEvent.params.id)
    const product = (await res.json()).data as ProductModel
    return product
})

export default component$(() => {

    const productSignal = useProductData()

    document.title = productSignal.value.name

    return (
        <div class="md:flex mt-4 justify-center max-w-screen-xl md:mx-auto px-4 gap-4">
            <div class="md:w-[400px] mx-auto md:mx-0 my-2">
                <ProductItem product={productSignal.value} productPage={true} />
            </div>
            <div class="md:min-w-[400px] mx-auto md:mx-0 my-2">
                <ProductDescription product={productSignal.value} />
            </div>
        </div>
    )
})