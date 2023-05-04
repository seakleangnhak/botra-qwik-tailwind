import { $, component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { useImageProvider } from "qwik-image"
import type { ImageTransformerProps } from "qwik-image"

import Header from '~/components/header/header';
import Footer from '~/components/footer/footer';
import styles from './styles.css?inline'


export const useBrandData = routeLoader$(async () => {
  const res = await fetch("https://botracomputer.com/server/api/brand.php")
  const brands = (await res.json()).data as BrandModel[]
  return brands
})

export const useCategoryData = routeLoader$(async () => {
  const res = await fetch("https://botracomputer.com/server/api/category.php")
  const categories = (await res.json()).data as CategoryModel[]
  return categories
})

export default component$(() => {
  useStyles$(styles);

  const imageTransformer$ = $(
    ({ src, width, height }: ImageTransformerProps): string => {
      const url = `https://ik.imagekit.io/botracomputer/${src}?tr=w-${width},h-${height}`
      // console.log(url)
      return url
    }
  );

  // Global Provider (required)
  useImageProvider({
    // You can set this prop to overwrite default values [3840, 1920, 1280, 960, 640]
    resolutions: [640],
    imageTransformer$,
  });

  return (
    <>
      <Header />
      <main class="pb-4">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
