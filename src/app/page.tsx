import Arcade from "@/components/arcade";
import Hero from "@/components/sections/hero";
import Introduction from "@/components/sections/introduction";
import Resume from "@/components/sections/resume";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";


export default function Home() {

  

  return (
    <div>
      <Hero />
      <Introduction />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}
