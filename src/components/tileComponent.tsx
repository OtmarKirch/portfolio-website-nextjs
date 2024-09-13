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
                    className="group col-span-1 md:col-span-2 h-56 overflow-hidden"
                >
                    <div className="relative size-full">
                        <div className="">
                            <div className="absolute size-full flex justify-center items-center transition duration-500 group-hover:scale-110">
                                <img
                                    className="h-56"
                                    src={bgImageUrl}
                                ></img>
                            </div>
                            <div className="absolute bg-gradient-to-br from-red-800 to-red-800/30 group-hover:to-red-800/10 transition-opacity duration-300 size-full">
                                <h2 className={`${bitter.className} text-white text-xl p-2`}>{title}</h2>
                                <p className="text-white p-2">{description}</p>
                            </div>
                        </div>

                    </div>
                </Link>
            );
        case 2:
            return (
                <Link
                    href={link}
                    style={tileStyle}
                    className="text-inter h-56 bg-contain bg-center bg-no-repeat col-span-3 md:col-span-1 hover:scale-105 transition duration-500 ease-in-out"
                >
                    <div className="[&:not(:hover)]:bg-blue-800/80 hover:bg-gradient-to-br from-blue-800/80 size-full">
                        <h2 className={`${bitter.className} text-white text-xl p-2`}>{title}</h2>
                        <p className="text-white p-2">{description}</p>
                    </div>

                </Link>
            );
        case 3:
            return (
                <Link
                    href={link}
                    style={tileStyle}
                    className="h-56 bg-cover bg-center bg-no-repeat col-span-3 md:col-span-1 hover:scale-105 transition duration-500 ease-in-out"
                >
                    <div className="[&:not(:hover)]:bg-green-800/80 hover:bg-gradient-to-br from-green-800/80 size-full">
                        <h2 className={`${bitter.className} text-white text-xl p-2`}>{title}</h2>
                        <p className="text-white p-2">{description}</p>
                    </div>

                </Link>
            );
        case 0:
            return (
                <Link
                    href={link}
                    style={tileStyle}
                    className="h-56 bg-cover bg-center bg-no-repeat col-span-3 md:col-span-2 hover:scale-105 transition duration-500 ease-in-out"
                >
                    <div className="[&:not(:hover)]:bg-yellow-800/80 hover:bg-gradient-to-br from-yellow-800/80 size-full">
                        <h2 className={`${bitter.className} text-white text-xl p-2`}>{title}</h2>
                        <p className="text-white p-2">{description}</p>
                    </div>

                </Link>
            );
    }


}