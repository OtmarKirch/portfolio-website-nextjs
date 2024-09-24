import Image from "next/image"
import Link from "next/link"
import ProjectDescription from "@/components/projectDescription"
import ProjectLinks from "@/components/projectLinks"
import ProjectImpressions from "@/components/sections/projectImpressions"

export default function Pokedec() {
    return (
        <div className="section-container text-white">
            <h1 className="text-center">Pokedec</h1>
            <ProjectDescription 
            description="This simple JavaScript app was developed as a learning project to understand the principles of programming with JavaScript. By building this small web application, which utilizes HTML, CSS, and JavaScript to load data from an external API and allows for the detailed viewing of data points, the development process can be followed through the commit messages and branches of this project, providing insight into each step taken towards achieving the objective of creating a functional and interactive web application." 
            />
            <ProjectLinks
            githubUrl="https://github.com/OtmarKirch/simple-js-app/"
            appUrl="https://otmarkirch.github.io/simple-js-app/"
            />
            <div className="h-48"></div>
            <ProjectImpressions
            images={[
                "/img/projects/pokedec/PokedecStartView.png",
                "/img/projects/pokedec/PokedecSearch.png",
                "/img/projects/pokedec/PokedecDetails.png"
            ]}
            descriptions={[
                "The pokedec app at the start. It shows all Pokémon by default with their statistics.",
                "The input allows for searching and selecting Pokémon.",
                "Details of the selected Pokémon are shown."
            ]}
            />
            
        </div>      
    )
}