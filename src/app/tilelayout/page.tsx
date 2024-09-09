import TileComponent from "@/components/tileComponent";

export default function TileLayout() {
    return (
        <div className="">
            <h1>Tile Layout</h1>
            <div className="grid grid-cols-3 gap-2 m-2">
                <TileComponent
                    id={1}
                    title="Work"
                    description="Take a look at my work"
                    bgImageUrl="/img/react.png"
                />
                <TileComponent
                    id={2}
                    title="About"
                    description="Take a look at my work"
                    bgImageUrl="/img/react.png"
                />
                <TileComponent
                    id={3}
                    title="Contact"
                    description="Take a look at my work"
                    bgImageUrl="/img/react.png"
                />
                <TileComponent
                    id={4}
                    title="Home"
                    description="Take a look at my work"
                    bgImageUrl="/img/react.png"
                />

                <TileComponent
                    id={5}
                    title="Work"
                    description="Take a look at my work"
                    bgImageUrl="/img/react.png"
                />
                <TileComponent
                    id={6}
                    title="About"
                    description="Take a look at my work"
                    bgImageUrl="/img/react.png"
                />
                <TileComponent
                    id={7}
                    title="Contact"
                    description="Take a look at my work"
                    bgImageUrl="/img/react.png"
                />
                <TileComponent
                    id={8}
                    title="Home"
                    description="Take a look at my work"
                    bgImageUrl="/img/react.png"
                />
            </div>

        </div>
    )
}