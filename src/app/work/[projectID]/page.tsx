
import * as actions from "@/actions"

interface ProjectProps {
    params: {
        projectID: string;
    }
}

export default function Project(props: ProjectProps) {
    const { projectID } = props.params;

    return (
        <div>
            <h1>Project Number {projectID}</h1>
        </div>
    )
}

export async function generateStaticParams() {
    const projects = await actions.getProjects();
    const projectIDs = projects.map((project) => {
        return { projectID: project.id.toString()}
    })
    return projectIDs
}