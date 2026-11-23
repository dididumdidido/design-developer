import { About } from "@/components/site/about";
import { Compare } from "@/components/site/compare";
import { FaqBooking } from "@/components/site/faq-booking";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { HowItWorks } from "@/components/site/how-it-works";
import { Levels } from "@/components/site/levels";
import { Nav } from "@/components/site/nav";
import { Paths } from "@/components/site/paths";
import { Problem } from "@/components/site/problem";
import { Results } from "@/components/site/results";
import { Roles } from "@/components/site/roles";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Roles />
        <Levels />
        <Paths />
        <HowItWorks />
        <Results />
        <Compare />
        <About />
        <FaqBooking />
      </main>
      <Footer />
    </>
  );
}
