import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <a href="/brand">
            <div class="border-[2px] border-blue-600 rounded-md hover:shadow-lg ease-in-out hover:-translate-y-1 transition-all">
                <img alt="Brand Logo" src="/favicon.svg" class="w-full" />
            </div>
        </a>
    )
})