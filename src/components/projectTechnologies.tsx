import Image from "next/image";

interface ProjectTechnologiesProps {
    [key: string]: string;
}

export default function ProjectTechnologies(props: ProjectTechnologiesProps) {

    return (
        <div className="section-container">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 xl:gap-8 justify-center items-center my-8">
                <h2 className="md:hidden text-center text-2xl font-bold font-mulish">Project Technologies</h2>
                <h2 className="hidden md:block text-right text-xl md:text-2xl xl:text-3xl font-bold">Project <br /> Technologies</h2>
                <div className="hidden md:block h-36 xl:h-48 pl-4 border-r-2 border-r-white"></div>
                <div className="md:hidden w-72 border-b-2 border-b-white"></div>
                <div className="flex flex-row justify-center item-center gap-3">
                    {Object.keys(props).map((key) => (
                        <div className="flex flex-col justify-center items-center gap-1" key={key}>
                            <p className="font-bold">{key}</p>
                            <Image className="w-10 md:w-14 xl:w-28" src={props[key]} alt={key} width={100} height={100} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}