import { component$, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$, useDocumentHead, useLocation } from "@builder.io/qwik-city";
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

    const head = useDocumentHead()
    const loc = useLocation()
    useTask$(() => {
        const imageUrl = `https://ik.imagekit.io/botracomputer/ik-seo/${(productSignal.value.images ?? "").split(",")[0].replace(".", "/" + productSignal.value.name.replace(" ", "-") + ".")}`
        head.title = productSignal.value.name
        head.meta = head.meta.concat([
            {
                name: 'description',
                content: productSignal.value.descr,
            },
            // FaceBook Meta Tags
            {
                property: 'og:url',
                content: loc.url.href,
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
                content: productSignal.value.name + "\nYou can find any laptop or its accessories right here! Price, Quality &Service guarantee! We also Build PC for all kind of Budget. Contact us to discuss or want to know more info about PC's thing.",
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
                content: loc.url.href,
            },
            {
                property: 'twitter:title',
                content: 'Botra Computer',
            },
            {
                property: 'twitter:description',
                content: productSignal.value.name + "\nYou can find any laptop or its accessories right here! Price, Quality &Service guarantee! We also Build PC for all kind of Budget. Contact us to discuss or want to know more info about PC's thing.",
            },
            {
                property: 'twitter:image',
                content: imageUrl,
            },
        ])
    })

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

export const head: DocumentHead = {
    title: 'Botra Computer',
    meta: [],
};