interface ProjectButtonProps {
    projectID: number;
}

export default function ProjectButton(props: ProjectButtonProps) {
    const { projectID } = props;
    return (
        <>
        <button className="border-2 border-black">
            Project Number {projectID}
        </button>
        </>
    )
}