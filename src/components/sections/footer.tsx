import Link from "next/link"
import Image from "next/image"

export default function FooterComponent() {
    return (
    <footer className="sticky top-[100vh] bg-gray-200">
        <div
            className=" max-w-7xl mx-auto mt-4 md:mt-8 xl:mt-16 w-full grid grid-cols-3 p-4"
        >
            
            <div className="h-6 md:h-12 xl:h-24 flex flex-row justify-center items-center gap-4 md:gap-6 xl:gap-8"></div>
            <div className="h-6 md:h-12 xl:h-24 flex flex-row justify-center items-center gap-4 md:gap-6 xl:gap-8">

                <div className="group relative h-full hover:scale-105 duration-1000">
                    <Link className="h-full" href="https://www.linkedin.com/in/otmar-kirchg%C3%A4%C3%9Fner-6196b18a/" target="blank">
                        <img className="h-full" src="img/linkedin_icon.svg" alt="" />
                    </Link>
                    <div className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tl from-blue-800 to-blue-500 transition-opacity duration-500 rounded-sm md:rounded-md"></div>
                </div>

                <div className="group relative h-full md:p-1 xl:p-2 hover:scale-105 duration-1000">
                    <Link className="h-full" href="https://github.com/OtmarKirch" target="blank">
                        <img className="h-full" src="img/github_icon_black.svg" alt="" />
                    </Link>
                    <div className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tl from-blue-800 to-blue-500 transition-opacity duration-500 rounded-full"></div>
                </div>

            </div>
            <div className="h-6 md:h-12 xl:h-24 flex flex-row justify-end items-center gap-4 md:gap-6 xl:gap-8">
                <div className="group relative h-full md: p-1 xl:p-2 hover:scale-105 duration-1000">
                    <Link className="h-full" href="mailto:otmar.kirchgaessner@gmail.com">
                        <img src="img/email_icon.svg" alt="" className="h-full" />
                    </Link>
                    <div className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tl from-blue-800 to-blue-500 transition-opacity duration-500"></div>
                </div>
            </div>
            </div>
        </footer>
    )
}