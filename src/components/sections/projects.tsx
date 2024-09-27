import ProjectDisplay from "../projectDisplay";

export default function Projects() {
    return (
        <div>
        <div className="section-container">
            <div className="grey-gradient p-6 xl:p-8 md:mb-2 xl:mb-4 text-white">
                <h1 className="font-mulish text-center">Projects</h1>
                <p className="text-center font-mulish mt-4">Take a look at the various projects I have completed so far.</p>
            </div>
            <ProjectDisplay />
        </div>
        </div>
    );
}