import Link from "next/link";
import Image from "next/image";
import { Bitter } from "next/font/google";

const bitter = Bitter({
    subsets: ["latin"],
    weight: ["500", "700"],
});


interface TileProps {
    id: number;
    title: string;
    description: string;
    bgImageUrl: string;
    link: string;
    [key: string]: any;
}

export default function ProjectTile({ id, title, description, bgImageUrl, link, ...props }: TileProps) {

    switch (id % 4) {
        case 1:
            return (
                <Link
                    href={link}
                    className="group col-span-5 md:col-span-3 h-32 md:h-56 overflow-hidden"
                >
                    <div className="relative size-full">
                        <div className="">
                            <div className="absolute size-full bg-cover flex justify-center items-center transition duration-500 group-hover:scale-110">
                                <img
                                    className="w-full"
                                    src={bgImageUrl}
                                ></img>
                            </div>
                            <div className="absolute bg-gradient-to-br from-red-800 to-red-800/30 group-hover:to-red-800/10 transition-opacity duration-300 size-full">
                                <h2 className={`${bitter.className} text-white text-xl p-4`}>{title}</h2>
                                <div className="absolute inset-x-0 bottom-0 hidden group-hover:block border-t-2 border-white bg-white/30">
                                    <p className="text-white p-2">{description}</p>
                                </div>

                            </div>
                            <div className="absolute right-3 md:right-4 top-3 md:top-4 flex justify-center items-center gap-1 md:gap-2 xl:gap-4">
                                {Object.keys(props).map((key) => (
                                    <div className="flex flex-col justify-center items-center gap-1" key={key}>
                                        <Image className="w-10 lg:w-14" src={props[key]} alt={key} width={100} height={100} />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </Link>
            );
        case 2:
            return (
                <Link
                    href={link}
                    className="group col-span-5 md:col-span-2 h-32 md:h-56 overflow-hidden"
                >
                    <div className="relative size-full">
                        <div className="">
                            <div className="absolute size-full bg-cover flex justify-center items-center transition duration-500 group-hover:scale-110">
                                <img
                                    className="w-full md:h-full"
                                    src={bgImageUrl}
                                ></img>
                            </div>
                            <div className="absolute bg-gradient-to-br from-green-800 to-green-800/30 group-hover:to-green-800/10 transition-opacity duration-300 size-full">
                                <h2 className={`${bitter.className} text-white text-xl p-4`}>{title}</h2>
                                <div className="absolute inset-x-0 bottom-0 hidden group-hover:block border-t-2 border-t-white bg-white/30">
                                    <p className="text-white p-2 ">{description}</p>
                                </div>

                            </div>
                            <div className="absolute right-3 md:right-4 top-3 md:top-4 flex justify-center items-center gap-1 md:gap-2 xl:gap-4">
                                {Object.keys(props).map((key) => (
                                    <div className="flex flex-col justify-center items-center gap-1" key={key}>
                                        <Image className="w-10 lg:w-14" src={props[key]} alt={key} width={100} height={100} />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </Link>
            );
        case 3:
            return (
                <Link
                    href={link}
                    className="group col-span-5 md:col-span-2 h-32 md:h-56 overflow-hidden"
                >
                    <div className="relative size-full">
                        <div className="">
                            <div className="absolute size-full bg-cover flex justify-center items-center transition duration-500 group-hover:scale-110">
                                <img
                                    className="w-full md:h-full"
                                    src={bgImageUrl}
                                ></img>
                            </div>
                            <div className="absolute bg-gradient-to-br from-yellow-800 to-yellow-800/30 group-hover:to-yellow-800/10 transition-opacity duration-300 size-full">
                                <h2 className={`${bitter.className} text-white text-xl p-4`}>{title}</h2>
                                <div className="absolute inset-x-0 bottom-0 hidden group-hover:block border-t-2 border-t-white bg-white/30">
                                    <p className="text-white p-2 ">{description}</p>
                                </div>

                            </div>
                            <div className="absolute right-3 md:right-4 top-3 md:top-4 flex justify-center items-center gap-1 md:gap-2 xl:gap-4">
                                {Object.keys(props).map((key) => (
                                    <div className="flex flex-col justify-center items-center gap-1" key={key}>
                                        <Image className="w-10 lg:w-14" src={props[key]} alt={key} width={100} height={100} />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </Link>
            );
        case 0:
            return (
                <Link
                    href={link}
                    className="group col-span-5 md:col-span-3 h-32 md:h-56 overflow-hidden"
                >
                    <div className="relative size-full">
                        <div className="">
                            <div className="absolute size-full bg-cover flex justify-center items-center transition duration-500 group-hover:scale-110">
                                <img
                                    className="w-full"
                                    src={bgImageUrl}
                                ></img>
                            </div>
                            <div className="absolute bg-gradient-to-br from-blue-800 to-blue-800/30 group-hover:to-blue-800/10 transition-opacity duration-300 size-full">
                                <h2 className={`${bitter.className} text-white text-xl p-4`}>{title}</h2>
                                <div className="absolute inset-x-0 bottom-0 hidden group-hover:block border-t-2 border-t-white bg-white/30">
                                    <p className="text-white p-2 ">{description}</p>
                                </div>

                            </div>
                            <div className="absolute right-3 md:right-4 top-3 md:top-4 flex justify-center items-center gap-1 md:gap-2 xl:gap-4">
                                {Object.keys(props).map((key) => (
                                    <div className="flex flex-col justify-center items-center gap-1" key={key}>
                                        <Image className="w-10 lg:w-14" src={props[key]} alt={key} width={100} height={100} />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </Link>
            );
    }


}