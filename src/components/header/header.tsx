import { $, component$, useSignal } from "@builder.io/qwik"
import MenuItem from "./menu-item"
import BrandModal from "../brand/brand-modal"
import CategoryModal from "../category/category-modal"
import { useBrandData, useCategoryData } from "~/routes/layout"
import { Link } from "@builder.io/qwik-city"

export default component$(() => {

    const showBrand = useSignal(false)
    const showCategory = useSignal(false)
    const brandSignal = useBrandData()
    const categorySignal = useCategoryData()

    return (
        <>
            <header class="sticky top-0 z-50 text-zinc-100">
                <nav class="flex lg:px-20 bg-gradient-to-r from-blue-800 to-blue-700">
                    {/* Logo */}
                    <Link prefetch={true} aria-label="Logo" href="/">
                        <div class="hidden md:flex p-2 ml-2 gap-4 items-center">
                            <img alt="BotraComputer Logo" src="/logo.png" width="40px" height="40px" />
                            <div class="font-bold text-2xl">
                                Botra<span class="text-sky-300">Computer</span>
                            </div>
                        </div>
                    </Link>

                    {/* menu items */}
                    <div class="flex-1 flex md:mx-4 justify-center md:justify-end">
                        <Link prefetch={true} aria-label="Home" href="/"><MenuItem>Home</MenuItem></Link>
                        <button onClick$={() => { showBrand.value = true }}><MenuItem>Brand</MenuItem></button>
                        <button onClick$={() => { showCategory.value = true }}><MenuItem>Category</MenuItem></button>
                        <div class="hidden md:block">
                            <a href="tel:015818781"><MenuItem>Tel: 015 818 781</MenuItem></a>
                        </div>
                    </div>
                </nav>
            </header>

            {/* modal */}
            {showBrand.value && (
                <BrandModal brands={brandSignal.value} onClose={$(() => { showBrand.value = false })} />
            )}

            {showCategory.value && (
                <CategoryModal category={categorySignal.value} onClose={$(() => { showCategory.value = false })} />
            )}
        </>
    )
})