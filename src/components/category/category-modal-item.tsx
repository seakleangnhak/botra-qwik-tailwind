import { component$, $ } from "@builder.io/qwik";
import type { PropFunction } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

interface CategoryModalItemProps {
    category: CategoryModel
    closeModal?: PropFunction<VoidFunction>
}

export default component$((props: CategoryModalItemProps) => {

    const url = `https://ik.imagekit.io/botracomputer/ik-seo/${props.category.logo.replace(".", "/" + props.category.name.replace(" ", "-") + ".")}?tr=w-${300},h-${300},c-at_max`

    const nav = useNavigate()

    const itemClick = $(() => {
        nav("/category/" + props.category.id)
        if (props.closeModal) {
            props.closeModal()
        }
    })

    return (
        // <Link prefetch={true} href={"/category/" + props.category.id}>
        <div onclick$={itemClick}>
            <div class="w-full border-[2px] border-blue-600 rounded-md bg-white overflow-hidden cursor-pointer hover:shadow-lg ease-in-out hover:-translate-y-1 transition-all">
                <div class="w-full aspect-square">
                    <img alt={props.category.name} src={url} class="h-full max-w-full mx-auto object-contain" />
                </div>
                <div class="flex justify-center p-3 text-base">
                    <span>{props.category.name}</span>
                </div>
            </div>
        </div>
        // </Link>
    )
})