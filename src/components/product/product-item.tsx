import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <div class="border-[2px] border-blue-600 rounded-md cursor-pointer hover:shadow-lg ease-in-out hover:-translate-y-1 transition-all">
            <img src="/favicon.svg" class="w-full" />
            <div class="flex justify-between px-[6px] text-base">
                <span>Product name</span>
                <span>$24</span>
            </div>
            <div class="p-1 m-1 text-center text-base text-zinc-100 font-bold rounded-[4px] bg-blue-600">
                <span>Brand</span>
            </div>
        </div>
    )
})