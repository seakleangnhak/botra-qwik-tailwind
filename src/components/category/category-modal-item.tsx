import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <a href="/category">
            <div class="border-[2px] border-blue-600 rounded-md cursor-pointer hover:shadow-lg ease-in-out hover:-translate-y-1 transition-all">
                <img alt="Category Name" src="/favicon.svg" class="w-full" />
                <div class="flex justify-center p-3 text-base">
                    <span>Category name</span>
                </div>
            </div>
        </a>
    )
})