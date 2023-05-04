import { component$ } from "@builder.io/qwik";
import { Image } from "qwik-image"

interface CategoryModalItemProps {
    category: CategoryModel
}

export default component$((props: CategoryModalItemProps) => {
    return (
        <a href={"/category/" + props.category.id}>
            <div class="w-full border-[2px] border-blue-600 rounded-md cursor-pointer hover:shadow-lg ease-in-out hover:-translate-y-1 transition-all">
                <div class="w-full aspect-square">
                    <Image src={props.category.logo} layout="constrained" objectFit="cover" aspectRatio={1} width={300} height={300} alt={props.category.name} />
                    {/* <img alt={props.category.name} src={"https://botracomputer.com/" + props.category.logo} class="h-full max-w-full mx-auto" /> */}
                </div>
                <div class="flex justify-center p-3 text-base">
                    <span>{props.category.name}</span>
                </div>
            </div>
        </a>
    )
})