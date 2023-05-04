import { component$ } from "@builder.io/qwik";
import { Image } from "qwik-image"

interface BrandHomeItemProps {
    brand: BrandModel
}

export default component$((props: BrandHomeItemProps) => {

    return (
        <a href={"/brand/" + props.brand.id}>
            <div class="w-full aspect-square border-[2px] border-blue-600 rounded-md hover:shadow-lg ease-in-out hover:-translate-y-1 transition-all">
                <Image src={props.brand.logo} layout="constrained" objectFit="cover" aspectRatio={1} width={300} height={300} alt={props.brand.name} />
            </div>
        </a>
    )
})