import Introduction from "@/components/sections/introduction";
import Resume from "@/components/sections/resume";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Skills from "@/components/sections/skills";


export default function Home() {



  return (
    <div>
      <Introduction />
      <Skills />
      {/*<Resume /> */}
      <Projects />
      {/*<Contact />*/}
    </div>
  );
}
