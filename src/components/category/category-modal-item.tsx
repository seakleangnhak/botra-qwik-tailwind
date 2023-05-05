import { component$ } from "@builder.io/qwik";


interface CategoryModalItemProps {
    category: CategoryModel
}

export default component$((props: CategoryModalItemProps) => {

    const url = `https://ik.imagekit.io/botracomputer/ik-seo/${props.category.logo.replace(".", "/" + props.category.name.replace(" ", "-") + ".")}?tr=w-${300},h-${300},c-at_max`

    return (
        <a href={"/category/" + props.category.id}>
            <div class="w-full border-[2px] border-blue-600 rounded-md cursor-pointer hover:shadow-lg ease-in-out hover:-translate-y-1 transition-all">
                <div class="w-full aspect-square">
                    <img alt={props.category.name} src={url} class="h-full max-w-full mx-auto" />
                </div>
                <div class="flex justify-center p-3 text-base">
                    <span>{props.category.name}</span>
                </div>
            </div>
        </a>
    )
})