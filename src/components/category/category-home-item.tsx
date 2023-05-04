import { component$ } from "@builder.io/qwik";
import { Image } from "qwik-image"

interface CategoryHomeItemProps {
    category: CategoryModel
}

export default component$((props: CategoryHomeItemProps) => {
    return (
        <a href={"/category/" + props.category.id}>
            <div class="flex items-center border-[2px] border-blue-600 rounded-md hover:shadow-lg ease-in-out hover:-translate-y-1 transition-all">
                <div class="h-[50px] w-[50px] mx-2 my-1">
                    <Image src={props.category.logo} layout="constrained" objectFit="cover" aspectRatio={1} width={50} height={50} alt={props.category.name} />
                    {/* <img alt={props.category.name} src={"https://botracomputer.com/" + props.category.logo} class="h-full mx-auto" /> */}
                </div>
                <span class="text-md font-bold mx-2">{props.category.name}</span>
            </div>
        </a>
    )
})