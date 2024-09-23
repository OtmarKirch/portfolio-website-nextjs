import { Bitter } from "next/font/google";
import Link from "next/link";

const bitter = Bitter({
    subsets: ["latin"],
    weight: ["500", "700"],
});

export default function Resume() {
    return (
        <>
            <h1 className="section-container mt-8">Component Title: Resume</h1>
        </>
    )
}