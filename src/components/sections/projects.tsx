import TileLayout from "../tileLayout";

export default function Projects() {
    return (
        <div className="section-container">
            <div className="bg-gradient-to-tl from-slate-400 to-slate-800/50 p-2 md:p-4 xl:p-8 md:mb-2 xl:mb-4">
                <h1 className="text-center xl:text-left">Projects</h1>
                <p className="text-center xl:text-left mt-4">Check out my projects</p>
            </div>
            <TileLayout />
        </div>
    );
}