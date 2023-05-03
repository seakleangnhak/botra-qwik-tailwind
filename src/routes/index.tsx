import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import BrandHomeItem from '~/components/brand/brand-home-item';
import CategoryHomeItem from '~/components/category/category-home-item';
import ProductItem from '~/components/product/product-item';

export default component$(() => {
  return (
    // hero
    <>
      <div
        style="background-image: url('/favicon.svg')"
        class="h-[calc(100vw*0.7)] lg:h-[calc(100vh-250px)] max-h-[calc(100vh-250px)] bg-slate-400 bg-cover bg-center bg-fixed">
      </div>
      <div class="max-w-screen-xl xl:mx-auto mx-2 md:mx-4 lg:mx-16 mt-4">
        {/* category */}
        <h5 class="text-orange-500 underline underline-offset-[12px]">Categories</h5>
        <div class="mt-4 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4">
          <CategoryHomeItem />
          <CategoryHomeItem />
          <CategoryHomeItem />
          <CategoryHomeItem />
          <CategoryHomeItem />
          <CategoryHomeItem />
          <CategoryHomeItem />
          <CategoryHomeItem />
          <CategoryHomeItem />
          <CategoryHomeItem />
          <CategoryHomeItem />
          <CategoryHomeItem />
          <CategoryHomeItem />
        </div>

        {/* brand */}
        <h5 class="text-orange-500 underline underline-offset-[12px] mt-4">Brand</h5>
        <div class="mt-4 grid lg:grid-cols-7 md:grid-cols-5 grid-cols-3 gap-4">
          <BrandHomeItem />
          <BrandHomeItem />
          <BrandHomeItem />
          <BrandHomeItem />
          <BrandHomeItem />
          <BrandHomeItem />
          <BrandHomeItem />
          <BrandHomeItem />
          <BrandHomeItem />
          <BrandHomeItem />
        </div>

        {/* best seller */}
        <h5 class="text-orange-500 underline underline-offset-[12px] mt-4">Best seller</h5>
        <div class="mt-4 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Botra Computer',
  meta: [
    {
      name: 'description',
      content: "You can find any laptop or its accessories right here! Price, Quality &Service guarantee! We also Build PC for all kind of Budget. Contact us to discuss or want to know more info about PC's thing.",
    },
  ],
};
