import Link from 'next/link';

export default function Header() {
    return (
        <header className="">
            <nav>
                <ul className="flex space-x-3 justify-center">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="/work">
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link href="/work/edit">
                            Edit
                        </Link>
                    </li>
                </ul>
                <hr />
            </nav>
        </header>
    );
}