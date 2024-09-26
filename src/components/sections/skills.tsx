import Image from 'next/image';

export default function Skills() {
    const techs = {
        html: "/img/technologies/html5_icon.svg",
        css: "/img/technologies/css3_icon.svg",
        javascript: "/img/technologies/js_icon.svg",
        typescript: "/img/technologies/ts_icon.svg",
        react: "/img/technologies/react_icon.svg",
        angular: "/img/technologies/angular_icon.svg",
        mongodb: "/img/technologies/mongodb_icon.svg",
        node: "/img/technologies/node_icon.svg",
        pwa: "/img/technologies/pwa_icon.svg",
        jest: "/img/technologies/jest_icon.svg",
        aws: "/img/technologies/aws_icon.svg",
        firebase: "/img/technologies/firebase_icon.svg",
        metro: "/img/technologies/metro_icon.svg",
        tailwind: "/img/technologies/tailwind_icon.svg",
        nextjs: "/img/technologies/nextjs_icon.svg",
        postman: "/img/technologies/postman_icon.svg",
        puppeteer: "/img/technologies/puppeteer_icon.png",
    };

    type Techs = {
        [key: string]: string;
    };

    function chunkArray(obj: Techs, chunkSize: number): [string, string][][] {
        const entries = Object.entries(obj);
        const result: [string, string][][] = [];

        for (let i = 0; i < entries.length; i += chunkSize) {
            const chunk = entries.slice(i, i + chunkSize);
            result.push(chunk);
        }

        return result;
    }

    const chunkedTechs = chunkArray(techs, 8);


    return (
        <div className="section-container text-white">
            <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-4 md:gap-6 xl:gap-8 justify-center items-center my-8">
                <h2 className="md:hidden text-center text-2xl font-bold">Project Technologies</h2>
                <h2 className="hidden md:block text-right text-xl md:text-2xl xl:text-3xl font-bold">Project <br /> Technologies</h2>
                <div className="hidden md:block h-36 xl:h-48 pl-4 border-r-2 border-r-white"></div>
                <div className="md:hidden w-72 border-b-2 border-b-white"></div>
                <div className="flex flex-col lg:flex-row justify-center item-center gap-3 lg:gap-5">
                    {chunkedTechs.map((chunk, index) => (
                        <div className="flex flex-row justify-center items-center gap-3" key={`chunk ${index}`}>
                            {chunk.map(([key, value]) => (
                                <div className="flex flex-col justify-center items-center" key={key}>
                                    <Image className="w-10 md:w-14 xl:w-28" src={value} alt={`icon ${key}`} width={100} height={100} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}