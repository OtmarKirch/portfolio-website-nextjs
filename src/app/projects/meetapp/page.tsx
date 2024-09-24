import Image from "next/image";
import Link from "next/link";

export default function Meetapp() {
    return (
        <div className="section-container text-white">
            <h1>Meet App</h1>
            <h2>My first full fledged pwa. This project features the use of test driven development, React, serverless functions, OAuth2 and more.</h2>
            <p>This project involves building a serverless, progressive web application (PWA) using React and a test-driven development (TDD) approach. The application leverages the Google Calendar API to fetch upcoming events. By combining serverless and PWA concepts, the application benefits from no backend maintenance, scalability, availability, no idle time costs, instant loading, offline support, push notifications, add to home screen prompt, responsive design, and cross-platform compatibility. The TDD approach ensures high-quality code by writing tests before actual functionality. The application also includes data visualization through graphs, enhancing its visual appeal and data interpretation. Users can search for a city and get a list of events hosted in that city. The data visualization component includes a scatter plot showing the number of events in each location and a pie chart visualizing the popularity of event genres.</p>
            <p>Take a look at <Link href="https://otmarkirch.github.io/meetApp/">the App</Link></p>
            <p>Take a look at <Link href="https://github.com/OtmarKirch/meetApp">the Code</Link></p>
            <h2>Technologies</h2>
            <p>React, Google Calendar API, AWS Lambda, AWS API Gateway, AWS S3, AWS CloudFront, Jest, Puppeteer, Recharts, HTML, CSS</p>

            <h2>Impressions</h2>

            <p>The meet app at the start. It shows 32 events of all cities by default with their statistics.</p>
            <Image src="/img/projects/meetApp/meetApp.png" alt="" width={600} height={400} />
            <p>Alerts are shown when the app is offline or when the user types incorrect input.</p>
            <Image src="/img/projects/meetApp/meetApp_alerts.png" alt="" width={600} height={400} />
            <p>The input allows for searching and selecting cities.</p>
            <Image src="/img/projects/meetApp/meetApp_citySearch.png" alt="" width={600} height={400} />
            <Image src="/img/projects/meetApp/meetApp_num.png" alt="" width={600} height={400} />

        </div>
    )
}