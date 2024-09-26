import Image from "next/image"
import Link from "next/link"

import ProjectDescription from "@/components/projectDescription"
import ProjectTechnologies from "@/components/projectTechnologies"
import ProjectImpressions from "@/components/projectImpressions"

export default function SciFiAppServer() {

    return (
        <div className="section-container text-white">
            <h1 id="myscifi" className="text-center">mySci-Fi App</h1>
            <ProjectDescription
                description="This app was developed using the whole MERN stack (MongoDB, Express, React and Node.js). This includes the client side as well as the server handling the API requests and connecting to the database. The slide show below gives you a detailed impression of the development journey."
            />
            <ProjectTechnologies
                html={"/img/technologies/html5_icon.svg"}
                css={"/img/technologies/css3_icon.svg"}
                javascript={"/img/technologies/js_icon.svg"}
                react={"/img/technologies/react_icon.svg"}
                mongodb={"/img/technologies/mongodb_icon.svg"}
                node={"/img/technologies/node_icon.svg"}
                postman={"/img/technologies/postman_icon.svg"}
            />

            {/* Project Links */}
            <div className="section-container ">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-24 grey-gradient">
                    <div className="py-2 md:py-4 lg:py-8 flex justify-center items-center gap-4 md:gap-8 xl:gap-12">
                        <Link href={"https://quiet-bastion-19832-9b36523e0b42.herokuapp.com/documentation.html"}>
                            <div className="group flex flex-row justify-center items-center gap-3">
                                <div className="relative h-12 w-14 group-hover:scale-105 duration-300">
                                    <div className="absolute opacity-50 group-hover:opacity-100 duration-300 inset-0 bg-gradient-to-tl from-blue-800 to-blue-500 rounded-md"></div>
                                    <Image className="absolute left-[3px] top-[-1px]" src="/img/hyperlink_icon_white.svg" alt="" width={50} height={50} />
                                </div>
                                <p className="text-sm md:text-base xl:text-lg">Server <br />documentation</p>
                            </div>
                        </Link>

                        <Link className="!mt-0" href={"https://github.com/OtmarKirch/sci-fi-app"}>
                            <div className="group flex flex-row justify-center items-center gap-3">
                                <p className="text-sm md:text-base xl:text-lg text-right">Server code <br /> on GitHub</p>
                                <div className="relative h-12 w-12 group-hover:scale-105 duration-300">
                                    <div className="absolute opacity-50 group-hover:opacity-100 duration-300 inset-0 bg-gradient-to-tl from-blue-800 to-blue-500 rounded-full"></div>
                                    <Image className="absolute inset-0" src="/img/github_icon_white.svg" alt="" width={50} height={50} />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="py-2 md:py-4 lg:py-8 flex justify-center items-center gap-4 md:gap-8 xl:gap-12">
                        <Link href={"https://myscifiapp.netlify.app/"}>
                            <div className="group flex flex-row justify-center items-center gap-3">
                                <div className="relative h-12 w-14 group-hover:scale-105 duration-300">
                                    <div className="absolute opacity-50 group-hover:opacity-100 duration-300 inset-0 bg-gradient-to-tl from-blue-800 to-blue-500 rounded-md"></div>
                                    <Image className="absolute left-[3px] top-[-1px]" src="/img/hyperlink_icon_white.svg" alt="" width={50} height={50} />
                                </div>
                                <p className="text-sm md:text-base xl:text-lg">Take a look<br />at the app</p>
                            </div>
                        </Link>

                        <Link className="!mt-0" href={"https://github.com/OtmarKirch/MySciFi-client"}>
                            <div className="group flex flex-row justify-center items-center gap-3">
                                <p className="text-sm md:text-base xl:text-lg text-right">App code <br /> on GitHub</p>
                                <div className="relative h-12 w-12 group-hover:scale-105 duration-300">
                                    <div className="absolute opacity-50 group-hover:opacity-100 duration-300 inset-0 bg-gradient-to-tl from-blue-800 to-blue-500 rounded-full"></div>
                                    <Image className="absolute inset-0" src="/img/github_icon_white.svg" alt="" width={50} height={50} />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Project Impressions */}
            <div className="section-container">
                <div className="flex flex-col justify-center items-center xl:flex-row">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-6">
                    <Image src={"/img/projects/mySciFiApp/mySciFiApp1.png"} alt="" width={800} height={400} />
                    <Image src={"/img/projects/mySciFiApp/mySciFiApp2.png"} alt="" width={800} height={400} />
                    <Image src={"/img/projects/mySciFiApp/mySciFiApp3.png"} alt="" width={800} height={400} />
                    <Image src={"/img/projects/mySciFiApp/mySciFiApp4.png"} alt="" width={800} height={400} />
                    <Image src={"/img/projects/mySciFiApp/mySciFiApp5.png"} alt="" width={800} height={400} />
                    <Image src={"/img/projects/mySciFiApp/mySciFiApp6.png"} alt="" width={800} height={400} />
                    <Image src={"/img/projects/mySciFiApp/mySciFiApp7.png"} alt="" width={800} height={400} />
                    <Image src={"/img/projects/mySciFiApp/mySciFiApp8.png"} alt="" width={800} height={400} />
                    </div>
                </div>
            </div>
             


        </div>
    )
}