"use server"
import { db } from "@/db";
import { Project } from "@prisma/client";
import { revalidatePath } from "next/cache";


export const getProjects = async (): Promise<Project[]> => {
    const projects = await db.project.findMany();
    return projects;
}

export const createProject = async (formData: FormData): Promise<void> => {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    await db.project.create({
        data: {
            name,
            text: description
        }
    });

    revalidatePath("/work");
    revalidatePath("/");
}