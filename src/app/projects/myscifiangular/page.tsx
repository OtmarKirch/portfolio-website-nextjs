import Image from "next/image";
import Link from "next/link";
import ProjectDescription from "@/components/projectDescription"
import ProjectTechnologies from "@/components/projectTechnologies"
import ProjectLinks from "@/components/projectLinks"
import ProjectImpressions from "@/components/projectImpressions"

export default function Myscifiangular() {
    return (
        <div className="section-container text-white">
            <h1 id="myscifiangular" className="text-center">mySci-Fi Angular Client</h1>
            <ProjectDescription 
            description="This app provides a frontend for the MyFlix API. It allows users to sign up, log in, view information about movies, and add movies to their list of favorites. The server-side code and documentation for this app can be found in this repository. A frontend has already been written in React. This project is a rewrite of the frontend in Angular." 
            />
            <ProjectTechnologies
            html={"/img/technologies/html5_icon.svg"}
            css={"/img/technologies/css3_icon.svg"}
            typescript={"/img/technologies/ts_icon.svg"}
            angular={"/img/technologies/angular_icon.svg"}
            />
            <ProjectLinks
            githubUrl="https://github.com/OtmarKirch/mySciFi-Angular-client"
            appUrl="https://otmarkirch.github.io/mySciFi-Angular-client/"
            />
            <ProjectImpressions
            images={[
                "/img/projects/mySciFiAppAngular/Angular1.png",
                "/img/projects/mySciFiAppAngular/Angular2.png",
            ]}
            descriptions={[
                "Viewing the movies",
                "Updating details",
            ]}
            />
            
        </div>      
    )
}