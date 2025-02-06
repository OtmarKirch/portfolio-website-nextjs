import Navigation from "../navigation";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative max-w-7xl mx-auto text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/70 via-slate-800/60 via-10% to-50% h-full w-full"></div>
            <div className="absolute top-2 sm:top-4 md:top-8 xl:top-10 left-4 md:left-6 xl:left-8 custom-text">
                <Navigation />
            </div>

            <div className="absolute inset-y-1/2 left-4 md:left-6 xl:left-8 flex flex-col justify-center items-center">
                <h1 className="w-24 sm:w-48 md:w-72 xl:w-96 pl-1 sm:p-2 md:p-4 xl:p-8 border-2 border-white text-lg sm:text-2xl md:text-4xl xl:text-7xl text-white font-mulish uppercase">
                    Living Web Design on the Edge
                </h1>
            </div>
            <p className="absolute left-4 md:left-6 xl:left-8 bottom-2 sm:bottom-4 md:bottom-8 xl:bottom-10 text-white custom-text">Welcome to my Website</p>
            <div className="w-16 md:w-20 xl:w-24 p-0.5 absolute right-4 md:right-4 xl:right-8 bottom-2 sm:bottom-4 md:bottom-8 xl:bottom-10">
                <Link href="https://www.codewars.com/users/OtmarKirch" target="_blank">
                    <Image
                        width={100} // default width
                        height={10} // default height
                        src={"https://www.codewars.com/users/OtmarKirch/badges/micro"}
                        alt="Codewars rank and honor points"
                        unoptimized={true}
                    />
                </Link>
            </div>
            <img src="/img/hero-image.png" alt="hero" className="w-full" />
        </div>
    )
}