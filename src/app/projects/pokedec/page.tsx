import ProjectDescription from "@/components/projectDescription"
import ProjectTechnologies from "@/components/projectTechnologies"
import ProjectLinks from "@/components/projectLinks"
import ProjectImpressions from "@/components/projectImpressions"

export default function Pokedec() {
    return (
        <div className="section-container text-white">
            <h1 id="pokedec" className="text-center">Pokedec</h1>
            <ProjectDescription 
            description="This simple JavaScript app was developed as a learning project to understand the principles of programming with JavaScript. By building this small web application, which utilizes HTML, CSS, and JavaScript to load data from an external API and allows for the detailed viewing of data points, the development process can be followed through the commit messages and branches of this project, providing insight into each step taken towards achieving the objective of creating a functional and interactive web application." 
            />
            <ProjectTechnologies
            html={"/img/technologies/html5_icon.svg"}
            css={"/img/technologies/css3_icon.svg"}
            javascript={"/img/technologies/js_icon.svg"}
            />
            <ProjectLinks
            githubUrl="https://github.com/OtmarKirch/simple-js-app/"
            appUrl="https://otmarkirch.github.io/simple-js-app/"
            />
            <ProjectImpressions
            images={[
                "/img/projects/pokedec/PokedecStartView.png",
                "/img/projects/pokedec/PokedecSearch.png",
                "/img/projects/pokedec/PokedecDetails.png"
            ]}
            descriptions={[
                "The Pokedec app at the start. As soon as the app is opened, an API call fetches the data of all Pokemons. By default a list of all Pokemons is shown as buttons.",
                "The input bar at the top allows for searching Pokémons. The search bar filters the list of Pokémons while the user types, reducing the list of buttons and highlighting the matching characters.",
                "When the user clicks on a button, a modal with the selected Pokemon appears. The modal shows the name, the image, the type and the abilities of the selected Pokemon. A click anywhere outside the modal closes it."
            ]}
            />
            
        </div>      
    )
}