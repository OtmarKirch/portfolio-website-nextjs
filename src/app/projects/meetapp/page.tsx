import Image from "next/image";
import Link from "next/link";
import ProjectDescription from "@/components/projectDescription"
import ProjectTechnologies from "@/components/projectTechnologies"
import ProjectLinks from "@/components/projectLinks"
import ProjectImpressions from "@/components/projectImpressions"

export default function Meetapp() {
    
    return (
        <div className="section-container text-white">
            <h1 id="meetapp" className="text-center">Meet App</h1>
            <ProjectDescription 
            description="This project involves building a serverless, progressive web application (PWA) using React and a test-driven development (TDD) approach. The application leverages the Google Calendar API to fetch upcoming events. By combining serverless and PWA concepts, the application benefits from no backend maintenance, scalability, availability, no idle time costs, instant loading, offline support, push notifications, add to home screen prompt, responsive design, and cross-platform compatibility. The TDD approach ensures high-quality code by writing tests before actual functionality. The application also includes data visualization through graphs, enhancing its visual appeal and data interpretation. Users can search for a city and get a list of events hosted in that city. The data visualization component includes a scatter plot showing the number of events in each location and a pie chart visualizing the popularity of event genres."
            />
            <ProjectTechnologies
            html={"/img/technologies/html5_icon.svg"}
            css={"/img/technologies/css3_icon.svg"}
            javascript={"/img/technologies/js_icon.svg"}
            react={"/img/technologies/react_icon.svg"}
            node={"/img/technologies/node_icon.svg"}
            pwa={"/img/technologies/pwa_icon.svg"}
            jest={"/img/technologies/jest_icon.svg"}
            aws={"/img/technologies/aws_icon.svg"}
            puppeteer={"/img/technologies/puppeteer_icon.png"}
            />
            <ProjectLinks
            githubUrl="https://github.com/OtmarKirch/meetApp"
            appUrl="https://otmarkirch.github.io/meetApp/"
            />
            <ProjectImpressions
            images={[
                "/img/projects/meetApp/meetApp.png",
                "/img/projects/meetApp/meetApp_alerts.png",
                "/img/projects/meetApp/meetApp_citySearch.png",
                "/img/projects/meetApp/meetApp_num.png",
            ]}
            descriptions={[
                "The meet app at the start. It shows 32 events of all cities by default with their statistics.",
                "Alerts are shown when the app is offline or when the user types incorrect input.",
                "The input allows for searching and selecting cities.",
                "The scatter plot reflects the number of the selected cities",
            ]}
            />
            
        </div>      
    )
}