// app/page.tsx

import Categories from "./_components/Categories";
import Deal from "./_components/Deal";
import Featured from "./_components/Featured";
import Hero from "./_components/Hero";
import Footer from "./_components/layout/Footer";
import Service from "./_components/Service";
import Story from "./_components/Story";
import Visit from "./_components/Visit";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <Categories />
      <Service />
      <Story />
      <Deal />
      <Visit />
      <Footer />
    </main>
  );
}
