import Link from 'next/link';
import Image from 'next/image';

interface ProjectLinksProps {
    appUrl: string;
    githubUrl: string;
}

export default function ProjectLinks({ appUrl, githubUrl }: ProjectLinksProps) {
    return (
        <div className="section-container">
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8 xl:gap-12">
                {appUrl && (
                    
                        <Link href={appUrl}>
                            <div className="group flex flex-row justify-center items-center gap-3">
                                <div className="relative h-12 w-14">
                                <div className="absolute opacity-50 group-hover:opacity-100 duration-300 inset-0 bg-gradient-to-tl from-blue-800 to-blue-500 rounded-md"></div>
                                <Image className="absolute left-[3px] top-[-1px]" src="/img/hyperlink_icon_white.svg" alt="" width={50} height={50} />
                                </div>
                                <p className="text-sm md:text-base xl:text-lg">Take a look <br/>at the app</p>
                            </div>
                        </Link>
                    
                )}
                {githubUrl && (
                    <Link className="!mt-0" href={githubUrl}>
                        <div className="group flex flex-row justify-center items-center gap-3">
                            <p className="text-sm md:text-base xl:text-lg text-right">Take a look <br />at the code</p>
                            <div className="relative h-12 w-12">
                                <div className="absolute opacity-50 group-hover:opacity-100 duration-300 inset-0 bg-gradient-to-tl from-blue-800 to-blue-500 rounded-full"></div>
                                
                            <Image className="absolute inset-0" src="/img/github_icon_white.svg" alt="" width={50} height={50} />
                            </div>
                        </div>
                    </Link>
                )}
            </div>

        </div>
    )
}