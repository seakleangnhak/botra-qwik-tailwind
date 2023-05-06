import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';
import ProductSection from '~/components/product/product-section';

export const useCategoryProductsData = routeLoader$(async ({ params, redirect }) => {
  const res = await fetch(`https://admin.botracomputer.com/server/api/product.php?is_disable=0&limit=10000&category_id=${params.id}`)

  if (!res.ok) {
    redirect(301, "/")
    return null
  } else {
    const products = (await res.json()).data.data as ProductModel[]

    if (!products || products.length == 0) {
      redirect(301, "/")
      return null
    }

    return products
  }
})

export default component$(() => {

  const productsSignal = useCategoryProductsData()

  if (!productsSignal.value) {
    return <></>
  }

  const groupBy = function (xs: any, key: any) {
    return xs.reduce(function (rv: any, x: any) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  const groupedProduct = groupBy(productsSignal.value, "brand_name")

  const url = `https://ik.imagekit.io/botracomputer/ik-seo/${(productsSignal.value[0].category_logo ?? "").split(",")[0].replace(".", "/" + productsSignal.value[0].category_name?.replace(" ", "-") + ".")}?tr=w-${300},h-${300},c-at_max`

  return (
    <div class="max-w-screen-xl xl:mx-auto mx-2 md:mx-4 lg:mx-16">
      <img alt="Brand Name" src={url} class="h-[150px] w-[150px] mx-auto my-4 rounded-md bg-white overflow-hidden object-contain" />

      {
        Object.keys(groupedProduct).map(key => (
          <ProductSection key={key} title={key} products={groupedProduct[key]} />
        ))
      }

    </div>
  );
});

export const head: DocumentHead = ({ resolveValue, url }) => {

  const products = resolveValue(useCategoryProductsData)

  if (!products || products.length == 0) {
    return { title: "Botra Computer" }
  }

  const product = products[0]
  const imageUrl = `https://ik.imagekit.io/botracomputer/ik-seo/${(product.category_logo ?? "").split(",")[0].replace(".", "/" + product.category_name?.replace(" ", "-") + ".")}`

  return {
    title: product.category_name,
    meta: [
      {
        name: 'description',
        content: "You can find any laptop or its accessories right here! Price, Quality &Service guarantee! We also Build PC for all kind of Budget. Contact us to discuss or want to know more info about PC's thing.",
      },
      // FaceBook Meta Tags
      {
        property: 'og:url',
        content: url.href,
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
        content: imageUrl,
      },
      // Twitter Meta Tags
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:domain',
        content: url.href,
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
        content: imageUrl,
      },
    ],
  }
};