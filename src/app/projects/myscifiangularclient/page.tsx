import Image from "next/image";
import Link from "next/link";

export default function Myscifiangularclient() {
    return (
        <div className="section-container text-white">
            <h1>My Sci-Fi Angular Client</h1>
            <p>This app provides a frontend for the MyFlix API. It allows users to sign up, log in, view information about movies, and add movies to their list of favorites. The server-side code and documentation for this app can be found in this repository. A frontend has already been written in React. This project is a rewrite of the frontend in Angular.</p>

            <p>Take a look at <Link href="https://otmarkirch.github.io/mySciFi-Angular-client/">the App</Link></p>
            <p>Take a look at <Link href="https://github.com/OtmarKirch/mySciFi-Angular-client">the Code</Link></p>

            <h2>Technologies</h2>
            <p>Angular, TypeScript, Angular Material</p>

            <h2>Impressions</h2>
            <p>Viewing the movies</p>
            <Image src="/img/projects/mySciFiAppAngular/Angular1.png" alt="" width={600} height={400} />

            <p>Updating details</p>
            <Image src="/img/projects/mySciFiAppAngular/Angular2.png" alt="" width={600} height={400} />

        </div>
    )
}