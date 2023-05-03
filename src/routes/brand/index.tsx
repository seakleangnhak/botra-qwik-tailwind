import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import ProductSection from '~/components/product/product-section';

export default component$(() => {
  return (
    <div class="max-w-screen-xl mx-auto">
      <img alt="Brand Name" src="/favicon.svg" class="h-[150px] mx-auto my-4" />

      <ProductSection />
      <ProductSection />
      <ProductSection />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Brand',
  meta: [
    {
      name: 'description',
      content: "Brand description",
    },
  ],
};
