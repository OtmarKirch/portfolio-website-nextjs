import { Bitter } from "next/font/google";
import Link from "next/link";

const bitter = Bitter({
    subsets: ["latin"],
    weight: ["500", "700"],
});

export default function Arcade() {
    return (
        <>
            {/* Grid container */}
            <div className="flex flex-col justify-center items-center container max-w-6xl mx-auto">

                <div className="relative group w-48 h-48">
                    <div className="absolute inset-0 opacity-100 group-hover:opacity-0  bg-gradient-to-r from-green-400 to-yellow-800 duration-1000"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-1000 bg-gradient-to-r from-blue-800 to-blue-300"></div>
                </div>

                <div className="flex flex-col md:flex-row border-4 border-slate-300 rounded-full overflow-hidden">
                    {/* Border left/top */}
                    <div className="md:hidden h-[75px] w-[150px] border-b-4"></div>
                    <div className="hidden md:block h-[76px] w-[38px] border-r-4"></div>

                    {/* Image */}
                    <div className="overflow-hidden">
                        <img
                            className="hover:scale-105 transition duration-500 ease-in-out"
                            src="https://placehold.co/150x76/red/white"
                            alt="" />
                        {/* Text */}
                        {/* Text on Hover */}
                    </div>
                    {/* Border middle */}
                    <div className="md:hidden w-[150px] border-b-4"></div>
                    <div className="hidden md:block h-[76px] border-r-4"></div>
                    {/* Image */}
                    <div className="overflow-hidden">
                        <img
                            className="hover:scale-105 transition duration-500 ease-in-out"
                            src="https://placehold.co/150x76/red/white"
                            alt="" />
                        {/* Text */}
                        {/* Text on Hover */}
                    </div>
                    {/* Border middle */}
                    <div className="md:hidden w-[150px] border-b-4"></div>
                    <div className="hidden md:block h-[76px] border-r-4"></div>
                    {/* Image */}
                    <div className="overflow-hidden">
                        <img
                            className="hover:scale-105 transition duration-500 ease-in-out"
                            src="https://placehold.co/150x76/red/white"
                            alt="" />
                        {/* Text */}
                        {/* Text on Hover */}
                    </div>
                    {/* Border middle */}
                    <div className="md:hidden w-[150px] border-b-4"></div>
                    <div className="hidden md:block h-[76px] border-r-4"></div>
                    {/* Image */}
                    <div className="overflow-hidden">
                        <img
                            className="hover:scale-105 transition duration-500 ease-in-out"
                            src="https://placehold.co/150x76/red/white"
                            alt="" />
                        {/* Text */}
                        {/* Text on Hover */}
                    </div>
                    {/* Border right/bottom */}
                    <div className="md:hidden h-[75px] w-[150px] border-t-4"></div>
                    <div className="hidden md:block h-[76px] w-[38px] border-l-4"></div>
                </div>
            </div>
        </>
    )
}