import type { Project } from "@prisma/client";

interface ProjectProps {
    project: Project;
}

export default function ShowProject(props: ProjectProps) {
    const { id, name, text, show } = props.project

    return (
        <div>
            <h1>{name}: {text}, ID: {id}, show: {show ? "true" : "false"}</h1>
        </div>
    )
}