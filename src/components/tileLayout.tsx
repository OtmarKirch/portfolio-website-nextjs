import TileComponent from "@/components/tileComponent";

export default function TileLayout() {
    return (
        <div className="">
            <div className="grid grid-cols-3 gap-3 m-12 max-w-160 m-auto">
                <TileComponent
                    id={1}
                    title="Work"
                    description="Take a look at my work"
                    bgImageUrl="/img/react.png"
                    link="/work"
                />
                <TileComponent
                    id={2}
                    title="About"
                    description="Find out about me"
                    bgImageUrl="/img/react.png"
                    link="/about"
                />
                <TileComponent
                    id={3}
                    title="Contact"
                    description="Reach out"
                    bgImageUrl="/img/coding.png"
                    link="/contact"
                />
                <TileComponent
                    id={4}
                    title="Home"
                    description="Get to home"
                    bgImageUrl="/img/coding.png"
                    link="/"
                />

                
            </div>

        </div>
    )
}