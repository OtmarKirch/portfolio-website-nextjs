import Image from "next/image"
import Link from "next/link"

import ProjectDescription from "@/components/projectDescription"
import ProjectTechnologies from "@/components/projectTechnologies"
import ProjectLinks from "@/components/projectLinks"
import ProjectImpressions from "@/components/sections/projectImpressions"

export default function SciFiAppServer() {

    return (
        <div className="section-container text-white">
            <h1 id="myscifi" className="text-center">mySci-Fi App</h1>
            <ProjectDescription 
            description="In the following slide show you can see the development of the whole MERN stack (MongoDB, Express, React and Node.js), including the server side which is realized in another project." 
            />
            <ProjectTechnologies
            html={"/img/technologies/html5_icon.svg"}
            css={"/img/technologies/css3_icon.svg"}
            javascript={"/img/technologies/js_icon.svg"}
            react={"/img/technologies/react_icon.svg"}
            mongodb={"/img/technologies/mongodb_icon.svg"}
            node={"/img/technologies/node_icon.svg"}
            />
            <ProjectLinks
            githubUrl="https://github.com/OtmarKirch/MySciFi-client"
            appUrl="https://myscifiapp.netlify.app/"
            />
            <ProjectLinks
            githubUrl="https://github.com/OtmarKirch/sci-fi-app"
            appUrl="https://quiet-bastion-19832-9b36523e0b42.herokuapp.com/documentation.html"
            />
            <ProjectImpressions
            images={[
                "/img/projects/mySciFiApp/mySciFiApp1.png",
                "/img/projects/mySciFiApp/mySciFiApp2.png",
                "/img/projects/mySciFiApp/mySciFiApp3.png",
                "/img/projects/mySciFiApp/mySciFiApp4.png",
                "/img/projects/mySciFiApp/mySciFiApp5.png",
                "/img/projects/mySciFiApp/mySciFiApp6.png",
                "/img/projects/mySciFiApp/mySciFiApp7.png",
                "/img/projects/mySciFiApp/mySciFiApp8.png"
            ]}
            descriptions={[
                "","","","","","","",""
            ]}
            />
            
        </div>      
    )
}