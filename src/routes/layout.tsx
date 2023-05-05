import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

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
