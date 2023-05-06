import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from '@builder.io/qwik-city';
import ProductDescription from "~/components/product/product-description";
import ProductItem from "~/components/product/product-item";

export const useProductData = routeLoader$(async ({ params, redirect }) => {
    const res = await fetch("https://admin.botracomputer.com/server/api/product.php/" + params.id)

    if (!res.ok) {
        redirect(301, "/")
        return null
    } else {
        const product = (await res.json()).data as ProductModel

        if (!product) {
            redirect(301, "/")
        }

        return product
    }
})

export default component$(() => {

    const productSignal = useProductData()

    if (!productSignal || !productSignal.value) {
        return <></>
    }

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

export const head: DocumentHead = ({ resolveValue, url }) => {

    const product = resolveValue(useProductData)

    if (!product) {
        return { title: "Botra Computer" }
    }

    const imageUrl = `https://ik.imagekit.io/botracomputer/ik-seo/${(product.images ?? "").split(",")[0].replace(".", "/" + product.name.replace(" ", "-") + ".")}`

    return {
        title: product.name,
        meta: [
            {
                name: 'description',
                content: product.descr,
            },
            // FaceBook Meta Tags
            {
                property: 'og:url',
                content: url.href,
            },
            {
                property: 'og:type',
                content: 'website',
            },
            {
                property: 'og:title',
                content: 'Botra Computer',
            },
            {
                property: 'og:description',
                content: product.name + "\nYou can find any laptop or its accessories right here! Price, Quality &Service guarantee! We also Build PC for all kind of Budget. Contact us to discuss or want to know more info about PC's thing.",
            },
            {
                property: 'og:image',
                content: imageUrl,
            },
            // Twitter Meta Tags
            {
                property: 'twitter:card',
                content: 'summary_large_image',
            },
            {
                property: 'twitter:domain',
                content: url.href,
            },
            {
                property: 'twitter:title',
                content: 'Botra Computer',
            },
            {
                property: 'twitter:description',
                content: product.name + "\nYou can find any laptop or its accessories right here! Price, Quality &Service guarantee! We also Build PC for all kind of Budget. Contact us to discuss or want to know more info about PC's thing.",
            },
            {
                property: 'twitter:image',
                content: imageUrl,
            },
        ],
    }
};