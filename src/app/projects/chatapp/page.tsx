import Image from "next/image";
import Link from "next/link";

export default function Chatapp() {
    return (
        <div className="section-container text-white">
            <h1>Chat App</h1>
            <h2>Native chat app developed with React Native using Metro Expo, Android Studio and Xcode for testing.</h2>
            <p>This project involves building a native real-time chat application using React Native, and Firebase. The chat application uses Firebase to authenticate users and store chat messages. The application includes features such as anonymous user authentication, chat room creation, real-time messaging, and message storage. The application also includes a responsive design, allowing users to access the chat application from various devices.</p>
            <h2>Technologies</h2>
            <p>React Native, Firebase, Expo</p>

            <h2>Impressions</h2>
            <p>The chat app at the start. It shows the login screen.</p>
            <Image src="/img/projects/chatApp/ChatApp_startscreen.png" alt="" width={600} height={400} />
            <p>The chat view</p>
            <Image src="/img/projects/chatApp/ChatApp_chatview.png" alt="" width={600} height={400} />
            <p>Sheet to add photos, images and location</p>
            <Image src="/img/projects/chatApp/ChatApp_addchoice.png" alt="" width={600} height={400} />

        </div>
    )
}