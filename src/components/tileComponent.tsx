import Link from "next/link";
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
}

export default function TileComponent({ id, title, description, bgImageUrl, link }: TileProps) {
    const tileStyle = {
        backgroundImage: `url(${bgImageUrl})`,
    };

    switch (id % 4) {
        case 1:
            return (
                <Link
                    href={link}
                    className="group col-span-3 md:col-span-2 h-32 md:h-56 overflow-hidden"
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
                                <h2 className={`${bitter.className} text-white text-xl p-2`}>{title}</h2>
                                <div className="absolute inset-x-0 bottom-0 hidden group-hover:block border-t-2 border-white bg-white/30">
                                    <p className="text-white p-2">{description}</p>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </Link>
            );
        case 2:
            return (
                <Link
                    href={link}
                    className="group col-span-3 md:col-span-1 h-32 md:h-56 overflow-hidden"
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
                                <h2 className={`${bitter.className} text-white text-xl p-2`}>{title}</h2>
                                <div className="absolute inset-x-0 bottom-0 hidden group-hover:block border-t-2 border-t-white bg-white/30">
                                    <p className="text-white p-2 ">{description}</p>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </Link>
            );
        case 3:
            return (
                <Link
                    href={link}
                    className="group col-span-3 md:col-span-1 h-32 md:h-56 overflow-hidden"
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
                                <h2 className={`${bitter.className} text-white text-xl p-2`}>{title}</h2>
                                <div className="absolute inset-x-0 bottom-0 hidden group-hover:block border-t-2 border-t-white bg-white/30">
                                    <p className="text-white p-2 ">{description}</p>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </Link>
            );
        case 0:
            return (
                <Link
                    href={link}
                    className="group col-span-3 md:col-span-2 h-32 md:h-56 overflow-hidden"
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
                                <h2 className={`${bitter.className} text-white text-xl p-2`}>{title}</h2>
                                <div className="absolute inset-x-0 bottom-0 hidden group-hover:block border-t-2 border-t-white bg-white/30">
                                    <p className="text-white p-2 ">{description}</p>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </Link>
            );
    }


}