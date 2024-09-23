import Image from "next/image"

export default function ProjectModal() {

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-slate-700 bg-opacity-90 z-50 flex justify-center items-center">
            <div className="bg-slate-600 border-2 border-slate-800 w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3 h-3/4 md:h-3/4 lg:h-3/4 xl:h-3/4 p-4 md:p-8 lg:p-8 xl:p-8 shadow-lg">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">Project Title</h1>
                    
                </div>
                <div className="flex justify-center items-center">
                    <Image width={1024} height={1024} src={"/img/Otmar.png"} alt="Image Otmar Kirchgäßner"
                        className="w-24 md:w-44 xl:w-72 h-24 md:h-44 xl:h-72 m-4 md:m-12 xl:m-24 rounded-full"
                    />
                    <div className="mr-4 md:mr-12 xl:mr-24">
                        <p className="custom-text my-2">
                            <p id="no_top_margin">
                                I am a passionate <span>&lt; web &gt;</span> developer from Germany. Are you interested in what I have done so far?
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}