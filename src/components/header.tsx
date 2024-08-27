import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
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
                        <Link href="/edit">
                            Edit
                        </Link>
                    </li>
                </ul>
                <hr />
            </nav>
        </header>
    );
}