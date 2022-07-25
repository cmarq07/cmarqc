import { useState } from "react"

function ProjectDiv(props) {

    const currentProject = props.currentProject
    const [projectToggle, setProjectToggle] = useState(false)

    let projectName = currentProject.name
    let link = currentProject.link
    let content = currentProject.content

    let contentParagraphs = content.map((line) => {
        return <p key={line}>{line}</p>
    })

    return (
        <>
            <div id={projectName + " Project"} className="button" onClick={e => {
                e.preventDefault();
                setProjectToggle(!projectToggle)
                document.getElementById(projectName + " Project").scrollIntoView({ behavior: "smooth" })
            }}>
                <span className="text">{projectName}</span>
            </div>
            <div className={"contentBox project" + (projectToggle ? "" : "-inactive")}>
                <div className='description'>
                    {contentParagraphs}
                    <a href={link} className="projectLink">Click to Visit Site</a>
                </div>
            </div>
        </>
    )
}

export default ProjectDiv