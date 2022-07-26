// Import Components
import PageHeader from '../Components/PageHeader'
import ProjectDiv from '../Components/Projects/ProjectDiv'

// Import Data
import { ProjectData } from '../Data/ProjectData.js'

function Projects() {

    let projects = generateProjectSections()

    return (
        <div className='centered maxWidth'>
            <PageHeader title="Projects" />
            <div id="menu" className="centered">
                <h2>Quick Links</h2>
                <div className="quick-links">
                    <a href="#programming-projects" onClick={e => {
                        e.preventDefault();
                        document.getElementById("programming-projects").scrollIntoView({ behavior: "smooth" })
                    }} className="link-ref">Programming Projects</a>
                    <a href="#games" onClick={e => {
                        e.preventDefault();
                        document.getElementById("games").scrollIntoView({ behavior: "smooth" })
                    }} className="link-ref">Games</a>
                    <a href="#art-media-projects" onClick={e => {
                        e.preventDefault();
                        document.getElementById("art-media-projects").scrollIntoView({ behavior: "smooth" })
                    }} className="link-ref">Art / Media Projects</a>
                </div>
            </div>

            <div className='maxWidth'>
                {projects}
            </div>
        </div>
    )
}

function generateProjectSections() {
    return ProjectData.map((projectArea) => {
        let projects = projectArea.projects.map((project) => {
            if (project) {
                return <ProjectDiv currentProject={project} key={project.name}/>
            } else {
                return <></>
            }
        })

        return (
            <div id={projectArea.id} key={projectArea.id} className="centered maxWidth">
                <h2>{projectArea.name}</h2>
                {projects}
            </div>
        )
    })
}

export default Projects