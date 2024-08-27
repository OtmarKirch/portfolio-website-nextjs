import ProjectButton from "./projectButton";
import { db } from "@/db";



export default async function ProjectContainer() {
    const projects = await db.project.findMany();

    return (
        <>
            <h1>Projects</h1>
            <div className="border-2 border-slate-300 ">
                {projects.map((project) => (
                    <ProjectButton key={project.id} project={project} />
                ))}
            </div>
        </>
    )
}