import ProjectButton from "./projectButton";
import { db } from "@/db";
import { Project } from "@prisma/client";
import * as actions from "@/actions";



export default async function ProjectContainer() {
    //const projects = await db.project.findMany();
    const projects = await actions.getProjects();

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