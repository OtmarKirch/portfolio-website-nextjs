import ProjectDescription from "@/components/projectDescription"
import ProjectTechnologies from "@/components/projectTechnologies"
import ProjectLinks from "@/components/projectLinks"
import ProjectImpressions from "@/components/projectImpressions"

export default function Portfolio() {
    return (
        <div className="section-container text-white">
            <h1 id="portfolio" className="text-center">Portfolio Website</h1>
            <ProjectDescription 
            description="I decided to develop my personal portfolio website using Next.js and Tailwind CSS. Having already used React, Next.js is a useful extension to my skills. Tailwind CSS is a utility-first CSS framework that allows me to quickly build custom designs, making it easier to create a responsive website." 
            />
            <ProjectTechnologies
            html={"/img/technologies/html5_icon.svg"}
            css={"/img/technologies/css3_icon.svg"}
            typescript={"/img/technologies/ts_icon.svg"}
            tailwind={"/img/technologies/tailwind_icon.svg"}
            nextjs={"/img/technologies/nextjs_icon.svg"}
            />
            <ProjectLinks
            githubUrl="https://github.com/OtmarKirch/portfolio-website-nextjs"
            appUrl="/"
            />
            
        </div>      
    )
}