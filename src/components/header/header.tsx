import { component$ } from "@builder.io/qwik"
import MenuItem from "./menu-item"

export default component$(() => {
    return (
        <header class="sticky top-0 z-50 text-zinc-100">
            <nav class="flex lg:px-20 bg-gradient-to-r from-blue-800 to-blue-700">
                {/* Logo */}
                <a href="/">
                    <div class="hidden md:flex p-2 ml-2 gap-4 items-center">
                        <img src="/favicon.svg" width="40" />
                        <div class="font-bold text-2xl">
                            Botra<span class="text-sky-300">Computer</span>
                        </div>
                    </div>
                </a>

                {/* menu items */}
                <div class="flex-1 flex md:mx-4 justify-center md:justify-end">
                    <a href="/"><MenuItem>Home</MenuItem></a>
                    <a href="/brand"><MenuItem>Brand</MenuItem></a>
                    <a href="/category"><MenuItem>Category</MenuItem></a>
                    <div class="hidden md:block">
                        <a href="tel:0962696645"><MenuItem>Tel: 0962696645</MenuItem></a>
                    </div>
                </div>
            </nav>
        </header>
    )
})