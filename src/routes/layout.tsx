import { component$, Slot, useStyles$ } from '@builder.io/qwik';

import Header from '~/components/header/header';
import Footer from '~/components/footer/footer';
import styles from './styles.css?inline'

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Header />
      <main class="relative h-[2000px]">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
