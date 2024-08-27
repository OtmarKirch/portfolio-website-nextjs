import ProjectButton from "./projectButton";

interface ProjectContainerProps {
    projectIDs: number[];
}

export default function ProjectContainer(props: ProjectContainerProps) {
    const { projectIDs } = props;
    return (
        <>
            <h1>Projects</h1>
            <div className="border-2 border-slate-300 ">
                {projectIDs.map((id) => {
                    return (
                        <ProjectButton key={id} projectID={id} />
                    )
                })}
            </div>
        </>
    )
}