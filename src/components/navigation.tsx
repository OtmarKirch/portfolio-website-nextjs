import Link from 'next/link';

export default function Navigation() {
    return (
        <nav>
            <ul className="flex space-x-2 md:space-x-5 xl:space-x-12 justify-center">
                <li className="group hover:cursor-pointer">
                    <div className="flex flex-col items-center">
                        <Link href="/">
                            Home
                        </Link>
                        <div className="opacity-0 group-hover:opacity-100 border-b-2 xl:border-b-4 border-b-white w-4 group-hover:w-full transition-all duration-500"></div>
                    </div>
                </li>
                <li className="group hover:cursor-pointer">
                    <div className="flex flex-col items-center">
                        <Link href="#about">
                            About
                        </Link>
                        <div className="opacity-0 group-hover:opacity-100 border-b-2 xl:border-b-4 border-b-white w-4 group-hover:w-full transition-all duration-500"></div>
                    </div>
                </li>
                <li className="group hover:cursor-pointer">
                    <div className="flex flex-col items-center">
                        <Link href="/projects">
                            Projects
                        </Link>
                        <div className="opacity-0 group-hover:opacity-100 border-b-2 xl:border-b-4 border-b-white w-4 group-hover:w-full transition-all duration-500"></div>
                    </div>
                </li>
                <li className="group hover:cursor-pointer">
                    <div className="flex flex-col items-center">
                        <Link href="#contact">
                            Contact
                        </Link>
                        <div className="opacity-0 group-hover:opacity-100 border-b-2 xl:border-b-4 border-b-white w-4 group-hover:w-full transition-all duration-500"></div>
                    </div>
                </li>
            </ul>
        </nav>
    );
}