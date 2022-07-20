// Import Components
import PageHeader from "../Components/PageHeader"

// Import Data
import { Schools } from "../Data/Schools"
import { Skills } from "../Data/Skills"
import { Experiences } from "../Data/Experiences"
import { Organizations } from "../Data/Organizations"
import { Volunteering } from "../Data/Volunteering"
import ResumePDF from "../Data/Resume.pdf"

// Import Images / Icons
import UW from '../Images/Schools/uws.png'
import BC from '../Images/Schools/bc.png'
import HZN from '../Images/Schools/hzn.png'
import Microsoft from '../Images/Orgs/microsoft.png'
import GOKIC from '../Images/Orgs/gokic.png'
import Sano from '../Images/Orgs/sano.png'
import DawgsCrew from '../Images/Orgs/dawg_crew.png'
import YEOC from '../Images/Orgs/yeoc.png'

import { DiJava, DiPython, DiSwift, DiReact, DiHtml5, DiCss3, DiJavascript1 } from 'react-icons/di'
import { SiCsharp } from 'react-icons/si'
import Kusto from '../Images/Icons/Kusto'
import SQL from '../Images/Icons/SQL'

function Resume() {

    // Modular parts
    let schoolDivs = generateSchoolDivs()
    let skills = generateSkillsDivs()
    let workDivs = generateWorkDivs()
    let orgDivs = generateOrgDivs()
    let volunteerDivs = generateVolunteeringDivs()

    return (
        <div className="centered maxWidth">
            <PageHeader title="Resume" />
            <div id="menu" className="centered">
                <div className="button download">
                    <a href={ResumePDF} target="_blank" rel="noreferrer">
                        View / Download Resume (PDF)
                    </a>
                </div>

                <h2>Quick Links</h2>
                <div className="quick-links">
                    <a href="#education" onClick={e => {
                        e.preventDefault();
                        document.getElementById("education").scrollIntoView({ behavior: "smooth" })
                    }} className="link-ref">Education</a>
                    <a href="#experience" onClick={e => {
                        e.preventDefault();
                        document.getElementById("experience").scrollIntoView({ behavior: "smooth" })
                    }} className="link-ref">Work Experience</a>
                    <a href="#organizations" onClick={e => {
                        e.preventDefault();
                        document.getElementById("organizations").scrollIntoView({ behavior: "smooth" })
                    }} className="link-ref">Organizations</a>
                    <a href="#volunteering" onClick={e => {
                        e.preventDefault();
                        document.getElementById("volunteering").scrollIntoView({ behavior: "smooth" })
                    }} className="link-ref">Volunteering</a>
                </div>
            </div>
            <div style={{ width: "100%" }}>
                {/* Key Skills */}
                <div id="keySkills">
                    <h2>Key Skills</h2>
                    <div className="contentBox skills">
                        {skills}
                    </div>
                </div>

                {/* Education */}
                <div id="education">
                    <h2>Education</h2>
                    {schoolDivs}
                </div>

                {/* Work Experience */}
                <div id="experience">
                    <h2>Work Experience</h2>
                    {workDivs}
                </div>

                {/* Organizations */}
                <div id="organizations">
                    <h2>Organizations</h2>
                    {orgDivs}
                </div>

                {/* Volunteering */}
                <div id="volunteering">
                    <h2>Volunteering</h2>
                    {volunteerDivs}
                </div>
            </div>
        </div>
    )
}

function generateSchoolDivs() {
    let schoolDivs = Schools.map((school) => {
        let counter = 0

        // Get items
        let items = school.items.map((item) => {
            let itemText = ""
            let itemValue = ""
            if (item.type === "gpa") {
                itemText = "GPA"
                itemValue = item.gpa
            } else if (item.type === "award_year") {
                if (item.award_name === "deans_list") {
                    itemText = "Dean's List"
                    itemValue = item.deans_list
                }
            } else if (item.type === "awards") {
                itemText = "Awards"
                itemValue = item.awards
            } else if (item.type === "courses") {
                itemText = "Notable Courses"
                itemValue = item.courses
            }

            // Increase counter
            counter++;

            return (
                <li key={counter + itemText} className="resume item">
                    <span className="itemText">
                        {itemText}:
                    </span>

                    <span>
                        {itemValue}
                    </span>
                </li>
            )
        })

        // Get image
        let schoolLogo = <></>
        if (school.shortcode === "UW") {
            schoolLogo = <img src={UW} alt="University of Washington Logo" className="resumeImage" />
        } else if (school.shortcode === "BC") {
            schoolLogo = <img src={BC} alt="Bellevue College Logo" className="resumeImage" />
        } else if (school.shortcode === "HZN") {
            schoolLogo = <img src={HZN} alt="Hazen High School Logo" className="resumeImage" />
        }

        return (
            <div className="contentBox resume" key={school.schoolName}>
                <div className="title">
                    {schoolLogo}
                    <span>{school.schoolName} || {school.endDate ? `${school.beginDate} - ${school.endDate}` : `${school.beginDate} - Current`} </span>
                </div>
                <div className="subtitle">
                    <span>{school.degree}</span>
                </div>
                <div className="content">
                    <ul>
                        {items}
                    </ul>
                </div>
            </div>
        )
    })

    return schoolDivs
}

function generateWorkDivs() {
    let workDivs = Experiences.map((job) => {

        let items = job.items.map((item) => {

            let counter = 0
            counter++

            return (
                <li key={counter + item} className="resume item">
                    {item}
                </li>
            )
        })

        // Get image
        let logo = <></>
        if (job.shortcode === "ms") {
            logo = <img src={Microsoft} alt="Microsoft Logo" className="resumeImage" />
        } else if (job.shortcode === "gokic") {
            logo = <img src={GOKIC} alt="Geeking Out Kids of Color Logo" className="resumeImage" />
        } else if (job.shortcode === "sano") {
            logo = <img src={Sano} alt="Sano Cafe Logo" className="resumeImage" />
        }

        return (
            <div className="contentBox resume" key={job.company + job.title + job.beginDate}>
                <div className="title">
                    {logo}
                    <span>{job.company} || {job.location} || {job.endDate ? `${job.beginDate} - ${job.endDate}` : `${job.beginDate} - Current`} </span>
                </div>
                <div className="subtitle">
                    <span>{job.title}</span>
                </div>
                <div className="content">
                    <ul>
                        {items}
                    </ul>
                </div>
            </div>
        )
    })

    return workDivs
}

function generateOrgDivs() {
    let orgDivs = Organizations.map((org) => {

        let items = org.items.map((item) => {

            let counter = 0
            counter++

            return (
                <li key={counter + item} className="resume item">
                    {item}
                </li>
            )
        })

        // Get image
        let logo = <></>
        if (org.shortcode === "bi") {
        } else if (org.shortcode === "yeoc") {
            logo = <img src={YEOC} alt="Young Executives of Color Logo" className="resumeImage" />
        }

        return (
            <div className="contentBox resume" key={org.name + org.beginDate}>
                <div className="title">
                    {logo}
                    <span>{org.name} || {org.endDate ? `${org.beginDate} - ${org.endDate}` : `${org.beginDate} - Current`} </span>
                </div>
                <div className="subtitle">
                    <span>{org.location}</span>
                </div>
                <div className="content">
                    <ul>
                        {items}
                    </ul>
                </div>
            </div>
        )
    })

    return orgDivs
}

function generateVolunteeringDivs() {
    let volDivs = Volunteering.map((volunteer) => {

        let items = volunteer.items.map((item) => {

            let counter = 0
            counter++

            return (
                <li key={counter + item} className="resume item">
                    {item}
                </li>
            )
        })

        // Get image
        let logo = <></>
        if (volunteer.shortcode === "dawgCrew") {
            logo = <img src={DawgsCrew} alt="Dawg's Logo" className="resumeImage" />
        } else if (volunteer.shortcode === "mercerIsland") {

        }

        return (
            <div className="contentBox resume" key={volunteer.name + volunteer.beginDate}>
                <div className="title">
                    {logo}
                    <span>{volunteer.orgName} || {volunteer.endDate ? `${volunteer.beginDate} - ${volunteer.endDate}` : `${volunteer.beginDate} - Current`} </span>
                </div>
                <div className="subtitle">
                    <span>{volunteer.title}</span>
                </div>
                <div className="content">
                    <ul>
                        {items}
                    </ul>
                </div>
            </div>
        )
    })

    return volDivs
}

function generateSkillsDivs() {
    let icon = <></>
    let skillsDivs = Skills.map((skill) => {
        if (skill === "Java") {
            icon = <DiJava style={{ color: "orange" }} className="icon" />
        } else if (skill === "Python") {
            icon = <DiPython style={{ color: "#1874A7" }} className="icon" />
        } else if (skill === "C#") {
            icon = <SiCsharp style={{ color: "#A74397" }} className="icon" />
        } else if (skill === "Swift") {
            icon = <DiSwift style={{ color: "#FF3F27" }} className="icon" />
        } else if (skill === "SQL") {
            icon = <SQL color="#EB6E17" className="icon" />
        } else if (skill === "KQL") {
            icon = <Kusto color="#302C6D" className="icon" />
        } else if (skill === "ReactJS") {
            icon = <DiReact style={{ color: "#00DDFF" }} className="icon" />
        } else if (skill === "HTML") {
            icon = <DiHtml5 style={{ color: "#FF5800" }} className="icon" />
        } else if (skill === "CSS") {
            icon = <DiCss3 style={{ color: "#0067FA" }} className="icon" />
        } else if (skill === "JavaScript") {
            icon = <DiJavascript1 style={{ color: "#323330", backgroundColor: "#F4DA1E" }} className="icon" />
        } else {
            icon = <></>
        }

        return (
            <div className="skillBadge" key={skill}>
                {icon}
                <span className="text">{skill}</span>
            </div>
        )
    })

    return skillsDivs
}

export default Resume