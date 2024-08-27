import ProjectContainer from "@/components/projectContainer";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <ProjectContainer projectIDs={[1,2,3,4,5,6]} />
    </div>
  );
}
