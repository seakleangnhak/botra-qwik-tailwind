import { component$ } from "@builder.io/qwik";

export default component$((props: { product: ProductModel }) => {
    return (
        <div class="border-[2px] border-blue-600 rounded-md bg-white overflow-hidden">
            <div class="text-center text-xl text-blue-600 font-bold p-4">
                {props.product.name}
            </div>

            {
                props.product.descr?.split("•").map(line => line && (
                    <div key={line} class="text-base text-gray-800 m-5">
                        <span class="text-blue-800">◉ </span>
                        {line}
                    </div>
                ))
            }

            <div class="bg-blue-600/20 h-[1px] mx-4 rounded-full"></div>

            <div class="text-center text-xl text-blue-600 font-bold p-4">
                {props.product.brand_name} @ Botra Computer
            </div>
        </div>
    )
})