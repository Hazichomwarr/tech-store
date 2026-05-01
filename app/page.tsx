// app/page.tsx

import Deal from "./_components/Deal";
import Featured from "./_components/Featured";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";
import Videos from "./_components/Videos";
import Visit from "./_components/Visit";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <Services />
      <Videos />
      <Testimonials />
      <Deal />
      <Visit />
    </main>
  );
}
