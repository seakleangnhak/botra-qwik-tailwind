import { component$ } from "@builder.io/qwik"
import MenuItem from "./menu-item"

export default component$(() => {
    return (
        <header class="sticky top-0 z-50 text-zinc-100">
            <nav class="flex lg:px-20 bg-gradient-to-r from-blue-800 to-blue-700">
                {/* Logo */}
                <div class="hidden md:flex p-2 ml-2 gap-4 items-center cursor-pointer">
                    <img src="/favicon.svg" width="40" />
                    <div class="font-bold text-2xl">
                        Botra<span class="text-sky-300">Computer</span>
                    </div>
                </div>

                {/* menu items */}
                <div class="flex-1 flex md:mx-4 justify-center md:justify-end">
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Brand</MenuItem>
                    <MenuItem>Category</MenuItem>
                    <div class="hidden md:block">
                        <MenuItem>Tel: 0962696645</MenuItem>
                    </div>
                </div>
            </nav>
        </header>
    )
})