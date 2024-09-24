import Image from "next/image"
import Link from "next/link"
import FooterComponent from "@/components/sections/footer"

export default function SciFiAppServer() {
    return (
        <div className="section-container text-white">
            <h1>SciFiAppServer</h1>
            <p>In the following slide show you can see the development of the whole MERN stack (MongoDB, Express, React and Node.js), including the server side which is realized in another project.</p>

            <p>Take a look at <Link href="https://myscifiapp.netlify.app/">the app</Link></p>
            <p>Take a look at <Link href="https://github.com/OtmarKirch/MySciFi-client">the code on Github</Link></p>
            <p>Take a look at <Link href="https://quiet-bastion-19832-9b36523e0b42.herokuapp.com/documentation.html">the server documentation</Link></p>
            <p>Take a look at <Link href="https://github.com/OtmarKirch/sci-fi-app">the code of the server</Link></p>
            <Image src="/img/projects/mySciFiApp/mySciFiApp1.png" alt="" width={600} height={400} />
            <Image src="/img/projects/mySciFiApp/mySciFiApp2.png" alt="" width={600} height={400} />
            <Image src="/img/projects/mySciFiApp/mySciFiApp3.png" alt="" width={600} height={400} />
            <Image src="/img/projects/mySciFiApp/mySciFiApp4.png" alt="" width={600} height={400} />
            <Image src="/img/projects/mySciFiApp/mySciFiApp5.png" alt="" width={600} height={400} />
            <Image src="/img/projects/mySciFiApp/mySciFiApp6.png" alt="" width={600} height={400} />
            <Image src="/img/projects/mySciFiApp/mySciFiApp7.png" alt="" width={600} height={400} />
            <Image src="/img/projects/mySciFiApp/mySciFiApp8.png" alt="" width={600} height={400} />
        </div>
    )
}