interface Project {
    project: {
        id: number;
        name: string;
        text: string;
        show: boolean;
    }
}

export default function ShowProject(props: Project) {
    const { id, name, text, show } = props.project

    return (
        <div>
            <h1>{name}: {text}, ID: {id}, show: {show ? "true" : "false"}</h1>
        </div>
    )
}