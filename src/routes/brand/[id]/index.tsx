import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import ProductSection from '~/components/product/product-section';

export const useBandProductsData = routeLoader$(async (requestEvent) => {
  const res = await fetch(`https://botracomputer.com/server/api/product.php?is_disable=0&limit=10000&brand_id=${requestEvent.params.id}`)
  const products = (await res.json()).data.data as ProductModel[]
  return products
})

export default component$(() => {

  const productsSignal = useBandProductsData()

  const groupBy = function (xs: any, key: any) {
    return xs.reduce(function (rv: any, x: any) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  const groupedProduct = groupBy(productsSignal.value, "category_name")

  const url = `https://ik.imagekit.io/botracomputer/ik-seo/${(productsSignal.value[0].brand_logo ?? "").split(",")[0].replace(".", "/" + productsSignal.value[0].brand_name?.replace(" ", "-") + ".")}?tr=w-${300},h-${300},c-at_max`

  return (
    <div class="max-w-screen-xl xl:mx-auto mx-2 md:mx-4 lg:mx-16">
      <img alt="Brand Name" src={url} class="h-[150px] w-[150px] mx-auto my-4" />

      {
        Object.keys(groupedProduct).map(key => (
          <ProductSection title={key} products={groupedProduct[key]} />
        ))
      }

    </div>
  );
});