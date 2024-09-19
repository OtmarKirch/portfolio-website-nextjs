import Link from "next/link"

export default function FooterComponent() {
    return (
        <footer
            className="sticky top-[100vh] w-full flex flex-row justify-center items-center bg-gray-200 p-4"
        >
            <div className="h-8 md:h-16 xl:h-24 flex flex-row justify-center items-center gap-4 md:gap-6 xl:gap-8">
                <Link className="size-full" href="#">
                    <img className="size-full" src="img/linkedin_icon.svg" alt="" />
                </Link>
                <Link className="size-full" href="#">
                    <img className="size-full" src="img/github_icon_blue.svg" alt="" />
                </Link>
            </div>
        </footer>
    )
}