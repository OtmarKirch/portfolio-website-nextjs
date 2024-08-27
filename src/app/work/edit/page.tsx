import ShowProject from "@/components/showProject"
import { db } from "@/db"

export default async function EditWork() {
    
    const projects = await db.project.findMany()

    async function createProject(formData: FormData) {
        "use server"

        const name = formData.get("name") as string
        const description = formData.get("description") as string

        const newProject = await db.project.create({
            data: {
                name,
                text: description
            }
        })
    }

    let project = true

    return (
        <div>
            <h1>Edit Work Page</h1>
            <br />
            <h2>Find a Project</h2>
            <form className="border-black border-2">
                <label>
                    Project Name:
                    <input className="rounded border-grey border-2" type="text" name="name" />
                </label>
                <button className="rounded boder-grey border-2 bg-slate-100" type="submit" >
                    Show Project
                </button>
            </form>
            <br />
            <h2>Projects</h2>
            {projects && projects.map((project) => {
                return (
                    <ShowProject key={project.id} project={project} />
                )

            })}

            <br></br>
            <h2>Create new Project</h2>
            <form action={createProject} className="border-black border-2">
                <div>
                    <label htmlFor="name">Project Name:</label>
                    <input className="rounded border-grey border-2" type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea className="rounded border-grey border-2" name="description" />
                </div>
                <button className="rounded boder-grey border-2 bg-slate-100" type="submit" >
                    Create Project
                </button>
            </form>

        </div>
    )
}