
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