import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$((props: { product: ProductModel, productPage?: boolean }) => {

    const url = `https://ik.imagekit.io/botracomputer/ik-seo/${(props.product.images ?? "").split(",")[0].replace(".", "/" + props.product.name.replace(" ", "-") + ".")}?tr=w-${props.productPage ? 500 : 300},h-${props.productPage ? 500 : 300},c-at_max`

    return (
        <Link prefetch={true} href={"/product/" + props.product.id}>
            <div class="border-[2px] border-blue-600 rounded-md bg-white overflow-hidden cursor-pointer hover:shadow-lg ease-in-out hover:-translate-y-1 transition-all">
                <img alt={props.product.name} src={url} class="w-full aspect-square object-contain" />
                <div class="flex justify-between px-[6px] text-base">
                    <span>{props.product.name}</span>
                    <span>${props.product.regular_price ?? 0}</span>
                </div>
                <div class="p-1 m-1 text-center text-base text-zinc-100 font-bold rounded-[4px] bg-blue-600">
                    <span>{props.product.brand_name ?? "Botra Computer"}</span>
                </div>
            </div>
        </Link>
    )
})