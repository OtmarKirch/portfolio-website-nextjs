import Image from "next/image"

export default function Introduction() {

    return (
        <div className="section-container text-white">
            <div className="py-6 flex flex-col justify-center items-center grey-gradient">
                <h1 className="sm:hidden text-center text-white">About Me</h1>
                <div className="flex justify-center items-center">
                    <Image width={1024} height={1024} src={"/img/Otmar_rectangle_small.jpg"} alt="Image Otmar Kirchgäßner"
                        className="w-24 md:w-44 xl:w-72 h-24 md:h-44 xl:h-72 m-4 md:m-12 xl:m-24 rounded-full shadow-lg shadow-white"
                    />
                    <div className="mr-4 md:mr-12 xl:mr-24">
                        <h1 className="font-mulish hidden sm:block md:mb-4">About Me</h1>
                        <p className="custom-text text-justify my-2">
                            <p className="custom-text">
                            Former dance school manager and teacher turned full-stack developer. Developed Google Apps Scripts to optimize IT Workflows, streamlining operations. Passionate about building solid web solutions. Self-taught developer with a background in aerospace engineering, who completed a coding Bootcamp to get a more structured education. Experienced with full-stack projects, including cloud deployments.
                            </p>

                            <a
                                href="/files/Otmar_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline mt-4 inline-block hover:text-blue-500 transition-color duration-500"
                            >
                                See Resume
                            </a>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}