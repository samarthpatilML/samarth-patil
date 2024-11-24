import { useRef } from "react"
import { PROJECTS } from "../constants"

const Projects = () => {
    const projectsRef = useRef(null)
    return (
        <section className="pt-16" id="projects" ref={projectsRef}>
            <div className="px-4">
                <h2 className="mb-8 text-center text-3xl font-medium le:text-4xl">
                    Projects
                </h2>
                <div className="flex flex-wrap justify-center">
                    {PROJECTS.map((project) => (
                        <div key={project.id} className="flex w-full flex-col p-4 md:w-1/2 lg:w-1/3">
                            <div className="flix-grow overflow-hidden rounded-lg border-purple-300/20">
                                <a href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        <img src={project.imgSrc} />
                                </a>

                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
   
    )
}

export default Projects
