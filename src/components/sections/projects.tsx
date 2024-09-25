import ProjectDisplay from "../projectDisplay";

export default function Projects() {
    return (
        <div>
        <div className="section-container">
            <div className="bg-gradient-to-tl from-slate-400 to-slate-800/50 p-2 md:p-4 xl:p-8 md:mb-2 xl:mb-4">
                <h1 className="text-center">Projects</h1>
                <p className="text-center mt-4">Take a look at the various projects I have completed so far.</p>
            </div>
            <ProjectDisplay />
        </div>
        </div>
    );
}