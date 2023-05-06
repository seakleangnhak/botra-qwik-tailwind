import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';
import BrandHomeItem from '~/components/brand/brand-home-item';
import CategoryHomeItem from '~/components/category/category-home-item';
import ProductSection from '~/components/product/product-section';
import { useBrandData, useCategoryData } from './layout';
import Slider from '~/components/slider/slider';


export const useNewProductData = routeLoader$(async () => {
  const res = await fetch("https://admin.botracomputer.com/server/api/product.php?limit=10")
  const products = (await res.json()).data.data as ProductModel[]
  return products
})

export default component$(() => {

  const brandSignal = useBrandData()
  const categorySignal = useCategoryData()
  const newProductsSignal = useNewProductData()

  return (
    <>
      <Slider />
      <div class="max-w-screen-xl xl:mx-auto mx-2 md:mx-4 lg:mx-16 mt-4">

        {/* category */}
        <h5 class="text-blue-800 underline underline-offset-[12px]">Categories</h5>
        <div class="mt-4 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4">
          {
            categorySignal.value.map(category => <CategoryHomeItem key={category.id} category={category} />)
          }
        </div>

        {/* brand */}
        <h5 class="text-blue-800 underline underline-offset-[12px] mt-4">Brand</h5>
        <div class="mt-4 grid lg:grid-cols-7 md:grid-cols-5 grid-cols-3 gap-4">
          {
            brandSignal.value.map(brand => <BrandHomeItem key={brand.id} brand={brand} />)
          }
        </div>

        {/* best seller */}
        <ProductSection title='New' products={newProductsSignal.value} />
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
    // FaceBook Meta Tags
    {
      property: 'og:url',
      content: 'https://botracomputer.com',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: 'Botra Computer',
    },
    {
      property: 'og:description',
      content: "You can find any laptop or its accessories right here! Price, Quality &Service guarantee! We also Build PC for all kind of Budget. Contact us to discuss or want to know more info about PC's thing.",
    },
    {
      property: 'og:image',
      content: 'https://ik.imagekit.io/botracomputer/logo.png',
    },
    // Twitter Meta Tags
    {
      property: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      property: 'twitter:domain',
      content: 'https://botracomputer.com',
    },
    {
      property: 'twitter:title',
      content: 'Botra Computer',
    },
    {
      property: 'twitter:description',
      content: "You can find any laptop or its accessories right here! Price, Quality &Service guarantee! We also Build PC for all kind of Budget. Contact us to discuss or want to know more info about PC's thing.",
    },
    {
      property: 'twitter:image',
      content: 'https://botracomputer.com',
    },
  ],
};
