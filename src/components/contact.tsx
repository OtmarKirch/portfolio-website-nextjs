"use client"

import { useFormState } from "react-dom";
import * as actions from "@/actions"

export default function Contact() {
    // const [formState, action] = useFormState(actions.sendContact{
    //     message: "",
    // });

    return (
        <div className="flex justify-center max-w-7xl mx-auto mt-2 md:mt-4 xl:mt-8">
        <div className="w-[95%] xl:w-[100%]">
            <form action="">
                <h3>Contact Me</h3>
                <div className="flex flex-col gap-2 md:gap-4 xl:gap-6">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="message">Message</label>
                    <input type="textarea" name="message" id="message" />
                </div>
            </form>
        </div>
        </div>
    )

}