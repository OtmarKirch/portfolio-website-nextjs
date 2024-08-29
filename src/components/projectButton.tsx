
import Link from "next/link";

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
        <Link href={`/work/${id}`} className="bg-blue-600 p-2 m-2 w-48 border-2 border-blue-300 rounded-lg">
            <h2 className="text-white text-center font-bold text-lg">Project Number: {id}</h2>
            <p className="text-white "><span className="underline decoration-blue-900 underline-offset-2">Project Name:</span> {name}</p>
            <p className="text-white"><span className="underline decoration-blue-900 underline-offset-2">Project Description:</span> {text}</p>
        </Link>
        </>
    )
}