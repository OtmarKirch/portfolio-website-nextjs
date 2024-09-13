import { Bitter } from "next/font/google";
import Link from "next/link";

const bitter = Bitter({
    subsets: ["latin"],
    weight: ["500", "700"],
});

export default function ResumeComponent() {
    return (
        <>
         <div className="max-w-160 m-auto px-6 py-12">
            {/* Grid container */}
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4">
                {/* Item 1 */}
                <div className="relative overflow:hidden">
                    {/* Image */}
                    <img
                    className="" 
                    src="https://placehold.co/300x150/red/white"
                    alt="" />
                    {/* Text */}
                    {/* Text on Hover */}
                </div>
                {/* Item 2 */}
                <div className="relative overflow:hidden">
                    {/* Image Mobile */}
                    <img
                    className="md:hidden" 
                    src="https://placehold.co/300x150/orange/white"
                    alt="" />
                    {/* Image Desktop */}
                    <img
                    className="hidden md:block" 
                    src="https://placehold.co/150x150/orange/white"
                    alt="" />
                    {/* Text */}
                    {/* Text on Hover */}
                </div>
                {/* Item 3 */}
                <div className="relative overflow:hidden">
                    {/* Image Mobile */}
                    <img
                    className="md:hidden" 
                    src="https://placehold.co/300x150/blue/white"
                    alt="" />
                    {/* Image Desktop */}
                    <img
                    className="hidden md:block" 
                    src="https://placehold.co/150x150/blue/white"
                    alt="" />
                    {/* Text */}
                    {/* Text on Hover */}
                </div>
                {/* Item 4 */}
                <div className="relative overflow:hidden">
                    {/* Image */}
                    <img
                    className="" 
                    src="https://placehold.co/300x150/green/white"
                    alt="" />
                    {/* Text */}
                    {/* Text on Hover */}
                </div>
            </div>
         </div>
        </>
    )
}