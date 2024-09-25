import ProjectTile from "@/components/projectTile";

export default function ProjectDisplay() {
    return (
        <div className="">
            <div className="grid grid-cols-5 md:gap-2 xl:gap-4">
                <ProjectTile
                    id={1}
                    title="Pokedec"
                    description="Small web application with HTML, CSS, and JavaScript that loads data from an external API and enables the viewing of data points in detail."
                    bgImageUrl="/img/coding.png"
                    link="/projects/pokedec/#pokedec"
                    html="/img/technologies/html5_icon.svg"
                    css="/img/technologies/css3_icon.svg"
                    javascript="/img/technologies/js_icon.svg"
                />
                <ProjectTile
                    id={2}
                    title="mySci-Fi App"
                    description="mySci-Fi App is a full stack web application using the MERN stack (MongoDB, Express, React, and Node.js)."
                    bgImageUrl="/img/coding.png"
                    link="/projects/myscifi/#myscifi"
                    mongodb="/img/technologies/mongodb_icon.svg"
                    react="/img/technologies/react_icon.svg"
                    node="/img/technologies/node_icon.svg"
                    postman="/img/technologies/postman_icon.svg"
                />
                <ProjectTile
                    id={3}
                    title="Meet App"
                    description="My first full fledged pwa. This project features the use of test driven development, React, serverless functions, OAuth2 and more."
                    bgImageUrl="/img/coding.png"
                    link="/projects/meetapp/#meetapp"
                    pwa="/img/technologies/pwa_icon.svg"
                    jest="/img/technologies/jest_icon.svg"
                    aws="/img/technologies/aws_icon.svg"
                />
                <ProjectTile
                    id={4}
                    title="Chat App"
                    description="Native chat app developed with React Native using Metro Expo, Android Studio and Xcode for testing."
                    bgImageUrl="/img/coding.png"
                    link="/projects/chatapp/#chatapp"
                    react="/img/technologies/react_icon.svg"
                    metro="/img/technologies/metro_icon.svg"
                    firebase="/img/technologies/firebase_icon.svg"
                />
                <ProjectTile
                    id={5}
                    title="mySci-Fi Angular"
                    description="This is a rewrite of the client side of the mySciFi app with the Angular framework."
                    bgImageUrl="/img/coding.png"
                    link="/projects/myscifiangular/#myscifiangular"
                    angular="/img/technologies/angular_icon.svg"
                    typescript="/img/technologies/ts_icon.svg"
                />
                <ProjectTile
                    id={6}
                    title="Portfolio Website"
                    description="This is the portfolio website you are currently visiting. It was developed with Next.js, Tailwind CSS, and TypeScript."
                    bgImageUrl="/img/coding.png"
                    link="/"
                    tailwind="/img/technologies/tailwind_icon.svg"
                    nextjs="/img/technologies/nextjs_icon.svg"
                    typescript="/img/technologies/ts_icon.svg"
                />
            </div>

        </div>
    )
}