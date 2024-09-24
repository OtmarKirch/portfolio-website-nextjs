import Image from "next/image";

interface ProjectImpressionsProps {
    images: string[];
    descriptions: string[];
}

export default function ProjectImpressions({ images, descriptions }: ProjectImpressionsProps) {
    return (
        <div className="mt-8 xl:mt-12">
            <div className="flex flex-col items-center justify-center gap-4 md:gap-8 lg:gap-12">
                {images.map((image, index) => {
                    switch (index % 2) {
                        case 0:
                            return (
                                <div className="flex flex-col items-center justify-center lg:flex-row !mr-0" key={index}>
                                    <div className="max-w-[600px]">
                                        <p className="text-center lg:text-right p-4 lg:p-8">{descriptions[index]}</p>
                                    </div>
                                    <Image src={image} alt="Pokedec" width={600} height={400} />
                                </div>
                            )
                        case 1:
                            return (
                                <div className="flex flex-col items-center justify-center lg:flex-row" key={index}>
                                    <div className="lg:order-1 max-w-[600px]">
                                        <p className="text-center lg:text-left p-4 lg:p-8">{descriptions[index]}</p>
                                    </div>
                                    <Image src={image} alt="Pokedec" width={600} height={400} />
                                </div>
                            )
                    }
                })}
            </div>
        </div>
    )
}