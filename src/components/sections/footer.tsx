import Link from "next/link"

export default function FooterComponent() {
    return (
        <footer
            className="sticky top-[100vh] mt-4 md:mt-8 xl:mt-16 w-full grid grid-cols-3 bg-gray-200 p-4"
        >
            <div className="h-6 md:h-12 xl:h-24 flex flex-row justify-center items-center gap-4 md:gap-6 xl:gap-8"></div>
            <div className="h-6 md:h-12 xl:h-24 flex flex-row justify-center items-center gap-4 md:gap-6 xl:gap-8">
                <Link className="h-full" href="#">
                    <img className="h-full" src="img/linkedin_icon.svg" alt="" />
                </Link>
                <Link className="h-full" href="#">
                    <img className="h-full" src="img/github_icon_blue.svg" alt="" />
                </Link>
            </div>
            <div className="h-6 md:h-12 xl:h-24 flex flex-row justify-end items-center gap-4 md:gap-6 xl:gap-8">
                <Link className="h-full" href="/contact">
                    <img src="img/email_icon.svg" alt="" className="h-full" />
                </Link>
            </div>
        </footer>
    )
}