import ProjectButton from "./projectButton";
import { db } from "@/db";
import { Project } from "@prisma/client";
import * as actions from "@/actions";



export default async function ProjectContainer() {
    const projects = await actions.getProjects();

    return (
        <>
            <h1 className="text-center">Projects</h1>
            <div className="flex flex-wrap justify-center max-w-2xl mx-auto border-2 border-slate-700 rounded-lg rounded-tl-3xl rounded-br-3xl">
                {projects.map((project) => (
                    <ProjectButton key={project.id} project={project} />
                ))}
            </div>
        </>
    )
}