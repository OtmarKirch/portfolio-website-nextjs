import Image from "next/image";

interface ProjectImpressionsProps {
    images: string[];
    descriptions: string[];
}

export default function ProjectImpressions({ images, descriptions }: ProjectImpressionsProps) {
    return (
        <div>
            <h1 className="text-center">Impressions</h1>
            <div className="flex flex-col items-center justify-center">
            {images.map((image, index) => {
                return (
                    <div key={index}>
                        <p>{descriptions[index]}</p>
                        <Image src={image} alt="Pokedec" width={600} height={400} />
                    </div>
                )
            })}
</div>
        </div>
    )
}