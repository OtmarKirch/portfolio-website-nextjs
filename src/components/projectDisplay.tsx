import ProjectTile from "@/components/projectTile";

export default function ProjectDisplay() {
    return (
        <div className="">
            <div className="grid grid-cols-3 md:gap-2 xl:gap-4">
                <ProjectTile
                    id={1}
                    title="Pokedec"
                    description="Small web application with HTML, CSS, and JavaScript that loads data from an external API and enables the viewing of data points in detail."
                    bgImageUrl="/img/coding.png"
                    link="/projects/pokedec/#pokedec"
                />
                <ProjectTile
                    id={2}
                    title="Project 2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    bgImageUrl="/img/coding.png"
                    link="/"
                />
                <ProjectTile
                    id={3}
                    title="Project 3"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    bgImageUrl="/img/coding.png"
                    link="/"
                />
                <ProjectTile
                    id={4}
                    title="Project 4"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    bgImageUrl="/img/coding.png"
                    link="/"
                />
                <ProjectTile
                    id={5}
                    title="Project 5"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    bgImageUrl="/img/coding.png"
                    link="/"
                />
                <ProjectTile
                    id={6}
                    title="Project 6"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    bgImageUrl="/img/coding.png"
                    link="/"
                />
                <ProjectTile
                    id={7}
                    title="Project 7"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    bgImageUrl="/img/coding.png"
                    link="/"
                />
                <ProjectTile
                    id={8}
                    title="Project 8"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    bgImageUrl="/img/coding.png"
                    link="/"
                />
                
            </div>

        </div>
    )
}