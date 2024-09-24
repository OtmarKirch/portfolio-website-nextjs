import Image from "next/image"
import Link from "next/link"

export default function Pokedec() {
    return (
        <div className="section-container text-white">
            <h1 className="text-center">Pokedec</h1>
            <p>This simple JavaScript app was developed as a learning project to understand the principles of programming with JavaScript. By building this small web application, which utilizes HTML, CSS, and JavaScript to load data from an external API and allows for the detailed viewing of data points, the development process can be followed through the commit messages and branches of this project, providing insight into each step taken towards achieving the objective of creating a functional and interactive web application.</p>
            <p>Take a look at <Link href="https://otmarkirch.github.io/simple-js-app/" target="blank">the App</Link></p>
            <p>Take a look at <Link href="https://github.com/OtmarKirch/simple-js-app/" target="blank">the Code</Link></p>
            <h2>Impressions</h2>
            <p>The pokedec app at the start. It shows all Pokémon by default with their statistics.</p>
            <Image src="/img/projects/pokedec/PokedecStartView.png" alt="Pokedec" width={600} height={400} />
            <p>The input allows for searching and selecting Pokémon.</p>
            <Image src="/img/projects/pokedec/PokedecSearch.png" alt="Pokedec" width={600} height={400} />
            <p>Details of the selected Pokémon are shown.</p>
            <Image src="/img/projects/pokedec/PokedecDetails.png" alt="Pokedec" width={600} height={400} />
        </div>      
    )
}