interface ProjectButtonProps {
    project: {
        id: number;
        name: string;
        text: string;
        show: boolean;
    }
}

export default function ProjectButton(props: ProjectButtonProps) {
    
    const { id, name, text } = props.project;


    return (
        <>
        <button className="border-2 border-black">
            Project Number: {id}
            <br />
            Project Name: {name}
            <br />
            Project Description: {text}
        </button>
        </>
    )
}