import Arcade from "@/components/arcade";
import Hero from "@/components/hero";
import ResumeComponent from "@/components/resume";
import TileLayout from "@/components/tileLayout";


export default function Home() {

  

  return (
    <div>
      <h1 className="text-center">Home Page</h1>
      <Hero />
      <TileLayout />
    </div>
  );
}
