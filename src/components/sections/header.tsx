import Link from 'next/link';

export default function Header() {
    return (
        <header className="">
            <nav>
                <ul className="flex space-x-3 justify-center">
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact">
                            Contact
                        </Link>
                    </li>
                </ul>
                <hr />
            </nav>
        </header>
    );
}