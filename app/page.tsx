// app/page.tsx

import Categories from "./_components/Categories";
import Deal from "./_components/Deal";
import Featured from "./_components/Featured";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Story from "./_components/Story";
import Testimonials from "./_components/Testimonials";
import Videos from "./_components/Videos";
import Visit from "./_components/Visit";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      {/* <Services /> */}
      <Categories />
      <Videos />
      {/* <Testimonials /> */}
      <Story />
      <Deal />
      <Visit />
    </main>
  );
}
