"use client"
import { useState } from "react";

interface ProjectButtonProps {
    project: {
        id: number;
        name: string;
        text: string;
        show: boolean;
    }
}

export default function ProjectButton(props: ProjectButtonProps) {
    const [counter, setCounter] = useState(0);
    
    const { id, name, text } = props.project;

    const testFunction = () => {
        setCounter(counter + 1);
        console.log(`Button clicked ${counter} times`);
    }


    return (
        <>
        <button onClick={testFunction} className="border-2 border-black">
            Project Number: {id}
            <br />
            Project Name: {name}
            <br />
            Project Description: {text}
        </button>
        </>
    )
}