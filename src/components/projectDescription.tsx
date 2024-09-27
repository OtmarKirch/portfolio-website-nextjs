interface ProjectDescriptionProps {
    description: string
}

export default function ProjectDescription({ description }: ProjectDescriptionProps) {
    const descriptionLength = description.length

    const sliceIndex = () => {
        for (let i = Math.floor(descriptionLength / 2); i < descriptionLength; i++) {
            if (description[i] === " ") {
                return i
            }
        }
    }
    console.log(sliceIndex())
    const descriptionFirstHalf = description.slice(0, sliceIndex())
    const descriptionSecondHalf = description.slice(sliceIndex(), descriptionLength)

    return (
        <div className="section-container py-6 xl:py-8 grey-gradient">
            <div className="flex flex-col lg:flex-row w-11/12 text-justify mx-auto">
                <div className="sm:hidden">
                    <p className="text-sm md:text-base xl:text-lg">{description}</p>
                </div>
                <div className="hidden sm:flex flex-row w-full">
                    <div className="w-1/2 pr-4">
                        <p className="text-sm md:text-base xl:text-lg">{descriptionFirstHalf}</p>
                    </div>
                    <div className="w-1/2 pl-4">
                        <p className="text-sm md:text-base xl:text-lg">{descriptionSecondHalf}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}