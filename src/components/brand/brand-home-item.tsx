import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <div class="border-[2px] border-blue-600 rounded-md cursor-pointer hover:shadow-lg ease-in-out hover:-translate-y-1 transition-all">
            <img src="/favicon.svg" class="w-full" />
        </div>
    )
})