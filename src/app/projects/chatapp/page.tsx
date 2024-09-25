import Image from "next/image";
import Link from "next/link";
import ProjectDescription from "@/components/projectDescription"
import ProjectTechnologies from "@/components/projectTechnologies"
import ProjectLinks from "@/components/projectLinks"
import ProjectImpressions from "@/components/projectImpressions"

export default function Chatapp() {
    return (
        <div className="section-container text-white">
            <h1 id="chatapp" className="text-center">Chat App</h1>
            <ProjectDescription 
            description="This project involves building a native real-time chat application using React Native, and Firebase. The chat application uses Firebase to authenticate users and store chat messages. The application includes features such as anonymous user authentication, chat room creation, real-time messaging, and message storage. The application also includes a responsive design, allowing users to access the chat application from various devices." 
            />
            <ProjectTechnologies
            html={"/img/technologies/html5_icon.svg"}
            css={"/img/technologies/css3_icon.svg"}
            javascript={"/img/technologies/js_icon.svg"}
            react={"/img/technologies/react_icon.svg"}
            firebase={"/img/technologies/firebase_icon.svg"}
            metro={"/img/technologies/metro_icon.svg"}
            />
            <ProjectLinks
            githubUrl="https://github.com/OtmarKirch/chat-demo"
            appUrl=""
            />
            <ProjectImpressions
            images={[
                "/img/projects/chatApp/ChatApp_startscreen.png",
                "/img/projects/chatApp/ChatApp_chatview.png",
                "/img/projects/chatApp/ChatApp_addchoice.png"
            ]}
            descriptions={[
                "The chat app at the start. It shows the login screen.",
                "The chat view",
                "Sheet to add photos, images and location"
            ]}
            />  
        </div>      
    )
}