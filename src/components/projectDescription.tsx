interface ProjectDescriptionProps {
    description: string
    }

export default function ProjectDescription({description}: ProjectDescriptionProps) {
    return (
        <div className="section-container py-4 grey-gradient">
            <div className="w-11/12 text-justify mx-auto">
            <p className="text-sm md:text-base xl:text-lg">{description}</p>
            </div>
        </div>
    )
}