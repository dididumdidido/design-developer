import { About } from "@/components/site/about";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Levels } from "@/components/site/levels";
import { Nav } from "@/components/site/nav";
import { Results } from "@/components/site/results";
import { Services } from "@/components/site/services";
import { Team } from "@/components/site/team";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <Levels />
        <Team />
        <Services />
        <Results />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
