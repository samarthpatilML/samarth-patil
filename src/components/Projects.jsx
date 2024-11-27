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
                                    <img src={project.imgSrc} alt={project.title}
                                    className="h-60 w-full object-cover"/>
                                </a>
                                <div className="p-6">
                                    <h3 className="mb-2 text-lg fount-medium lg:text-2xl">{project.title} </h3>
                                    <p className="mb-4">{project.description}</p>
                                    <div className="mb-4">
                                        <strong>Tech Stack:</strong>
                                        <ul>
                                            {project.techStack.map((tech, index) =>
                                            (
                                                <li key={index} className="mb-1
                                                mr-2 inline-block rounded-full
                                                border-2 broder-pink-500/30 px-3py-1 text-sm font-semibold">
                                                    {tech}
                                                </li>
                                                
                                              
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
   
    )
}

export default Projects
