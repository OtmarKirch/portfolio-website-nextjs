"use client"

import { useFormState } from "react-dom";
import * as actions from "@/actions"

export default function Contact() {
    // const [formState, action] = useFormState(actions.sendContact{
    //     message: "",
    // });

    return (
        <div id="contact" className="section-container mt-2 md:mt-4 xl:mt-8">
            <div className="flex justify-center py-2 md:py-4 xl:py-8 border-slate-600 xl:rounded-md xl:border-2 bg-gradient-to-tl from-slate-400 to-slate-800/50 size-full">
                <div className="w-[95%] xl:w-[98%]">
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
        </div>
    )

}