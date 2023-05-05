import { component$ } from "@builder.io/qwik";


interface BrandHomeItemProps {
    brand: BrandModel
}

export default component$((props: BrandHomeItemProps) => {

    const url = `https://ik.imagekit.io/botracomputer/ik-seo/${props.brand.logo.replace(".", "/" + props.brand.name.replace(" ", "-") + ".")}?tr=w-${300},h-${300},c-at_max`

    return (
        <a href={"/brand/" + props.brand.id}>
            <div class="w-full border-[2px] border-blue-600 rounded-md hover:shadow-lg ease-in-out hover:-translate-y-1 transition-all">
                <img alt={props.brand.name} src={url} class="w-full aspect-square" />
            </div>
        </a>
    )
})