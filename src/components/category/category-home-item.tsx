import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <div class="flex items-center border-[2px] border-blue-600 rounded-md cursor-pointer hover:shadow-lg ease-in-out hover:-translate-y-1 transition-all">
            <img src="/favicon.svg" class="h-[50px]" />
            <span class="text-md font-bold">Category Name</span>
        </div>
    )
})