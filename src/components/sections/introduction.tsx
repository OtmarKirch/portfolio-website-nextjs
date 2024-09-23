import Image from "next/image"

export default function Introduction() {

    return (
        <div className="section-container mt-4 md:mt-8 xl:mt-12 text-slate-900">
            <h1 className="md:hidden text-center mb-4 ">About Me</h1>
            <div className="flex justify-center items-center bg-gradient-to-tl from-slate-400 to-slate-800/50 xl:border-2 border-slate-600">
                <Image width={1024} height={1024} src={"/img/Otmar.png"} alt="Image Otmar Kirchgäßner"
                    className="w-24 md:w-44 xl:w-72 h-24 md:h-44 xl:h-72 m-4 md:m-12 xl:m-24 rounded-full"
                />
                <div className="mr-4 md:mr-12 xl:mr-24">
                    <h1 className="hidden md:block mb-4">About Me</h1>
                    <p className="custom-text my-2">
                        <p id="no_top_margin">
                            I am a passionate <span>&lt; web &gt;</span> developer from Germany. Are you interested in what I have done so far?
                        </p>
                    </p>
                </div>
            </div>
        </div>
    )
}