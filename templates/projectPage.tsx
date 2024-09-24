import ProjectDescription from "@/components/projectDescription"
import ProjectTechnologies from "@/components/projectTechnologies"
import ProjectLinks from "@/components/projectLinks"
import ProjectImpressions from "@/components/sections/projectImpressions"

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