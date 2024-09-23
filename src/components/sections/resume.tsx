import { Bitter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const bitter = Bitter({
    subsets: ["latin"],
    weight: ["500", "700"],
});

export default function Resume() {
    return (
        <div className="section-container">
            <div className="flex flex-col md:flex-row justify-center items-center space-x-2 xl:space-x-10 space-y-8 w-11/12 mx-auto my-4">

                <div className="flex flex-row md:flex-col justify-center items-center space-y-1 md:space-y-2 xl:space-y-4 space-x-4 max-w-sm">
                    <div className="flex flex-col justify-center items-center space-y-1 md:space-y-2">
                        <Image width={1024} height={1024} src={"/img/resume/passion_icon.png"} alt="passion icon"
                            className="h-12 w-12 md:h-18 md:w-18 xl:h-24 xl:w-24"
                        />
                        <h3 className="text-center md:text-lg xl:text-xl font-bold">Passion</h3>
                    </div>
                    <p className="text-center custom-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste porro, quasi totam impedit fugiat natus quaerat ea hic a mollitia.</p>
                </div>

                <div className="hidden md:block h-36 xl:h-48 pl-4 border-r-2 border-r-slate-800"></div>

                <div className="flex flex-row md:flex-col justify-center items-center space-y-1 md:space-y-2 xl:space-y-4 space-x-4 max-w-sm">
                    <div className="flex flex-col justify-center items-center space-y-1 md:space-y-2">
                        <Image width={1024} height={1024} src={"/img/resume/skills_icon.png"} alt="passion icon"
                            className="h-12 w-12 md:h-18 md:w-18 xl:h-24 xl:w-24"
                        />
                        <h3 className="text-center md:text-lg xl:text-xl font-bold">Skills</h3>
                    </div>
                    <p className="text-center custom-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste porro, quasi totam impedit fugiat natus quaerat ea hic a mollitia.</p>
                </div>

                <div className="hidden md:block h-36 xl:h-48 pl-4 border-r-2 border-r-slate-800"></div>

                <div className="flex flex-row md:flex-col justify-center items-center space-y-1 md:space-y-2 xl:space-y-4 space-x-4 max-w-sm">
                    <div className="flex flex-col justify-center items-center space-y-1 md:space-y-2">
                        <Image width={1024} height={1024} src={"/img/resume/scale_icon.png"} alt="passion icon"
                            className="h-12 w-12 md:h-18 md:w-18 xl:h-24 xl:w-24"
                        />
                        <h3 className="text-center md:text-lg xl:text-xl font-bold">Ethics</h3>
                    </div>
                    <p className="text-center custom-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste porro, quasi totam impedit fugiat natus quaerat ea hic a mollitia.</p>
                </div>
            </div>

            <ul className="hidden">
                <li>Passion</li>
                <li>Skills</li>
                <li>Ethics</li>
            </ul>
            <Image width={1024} height={1024} src={"/img/Otmar.png"} alt="Image Otmar Kirchgäßner"
                className="hidden w-24 md:w-44 xl:w-72 h-24 md:h-44 xl:h-72 m-4 md:m-12 xl:m-24 rounded-full"
            />

        </div>
    )
}