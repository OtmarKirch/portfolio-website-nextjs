import ProjectDescription from "@/components/projectDescription"
import ProjectTechnologies from "@/components/projectTechnologies"
import ProjectLinks from "@/components/projectLinks"
import ProjectImpressions from "@/components/projectImpressions"

export default function ProjectPage() {
    return (
        <div className="section-container text-white">
            <h1 id="pokedec" className="text-center">Pokedec</h1>
            <ProjectDescription 
            description="" 
            />
            <ProjectTechnologies
            html={"/img/technologies/html5_icon.svg"}
            css={"/img/technologies/css3_icon.svg"}
            javascript={"/img/technologies/js_icon.svg"}
            typescript={"/img/technologies/ts_icon.svg"}
            react={"/img/technologies/react_icon.svg"}
            angular={"/img/technologies/angular_icon.svg"}
            mongodb={"/img/technologies/mongodb_icon.svg"}
            node={"/img/technologies/node_icon.svg"}
            pwa={"/img/technologies/pwa_icon.svg"}
            jest={"/img/technologies/jest_icon.svg"}
            aws={"/img/technologies/aws_icon.svg"}
            firebase={"/img/technologies/firebase_icon.svg"}
            metro={"/img/technologies/metro_icon.svg"}
            tailwind={"/img/technologies/tailwind_icon.svg"}
            nextjs={"/img/technologies/nextjs_icon.svg"}
            postman={"/img/technologies/postman_icon.svg"}
            puppeteer={"/img/technologies/puppeteer_icon.png"}
            />
            <ProjectLinks
            githubUrl=""
            appUrl=""
            />
            <ProjectImpressions
            images={[
                "",
            ]}
            descriptions={[
                "",
            ]}
            />
            
        </div>      
    )
}