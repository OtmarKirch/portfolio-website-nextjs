"use server"
import { db } from "@/db";
import { Project } from "@prisma/client";



export const getProjects = async (): Promise<Project[]> => {
    const projects = await db.project.findMany();
    return projects;
}