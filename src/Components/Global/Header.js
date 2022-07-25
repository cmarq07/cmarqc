// Import Libraries
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Header() {

    const [headerExpanded, setHeaderExpanded] = useState(false)

    return (
        <>
            <motion.div className="header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
            >
                <div className={"collapsible"}>
                    <div className="nav">
                        <NavLink to='/' className="navButton">Home</NavLink>
                        <NavLink to='/about' className="navButton">About</NavLink>
                        <NavLink to='/resume' className="navButton">Resume</NavLink>
                        <NavLink to='/projects' className="navButton">Projects</NavLink>
                        <NavLink to='/contact' className="navButton">Contact</NavLink>
                    </div>
                    <div className="socials">
                        {/* GitHub */}
                        <a title="GitHub" href='https://github.com/cmarq07' target="_blank" rel="noreferrer">
                            <div className="mediaLink" id="githubLink"></div>
                        </a>

                        {/* Instagram */}
                        <a title="Instagram" href='https://www.instagram.com/cmarq07' target="_blank" rel="noreferrer">
                            <div className="mediaLink" id="instagramLink"></div>
                        </a>

                        {/* LinkedIn */}
                        <a title="LinkedIn" href='https://www.linkedin.com/in/chrcalloway' target="_blank" rel="noreferrer">
                            <div className="mediaLink" id="linkedInLink"></div>
                        </a>
                    </div>
                </div>

                <div className="expandButton" onClick={() => { setHeaderExpanded(!headerExpanded) }}>
                    <FaBars className='barsIcon' />
                </div>

            </motion.div>
            <motion.div className={headerExpanded ? "mobileNavExpanded" : "mobileNav"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}>
                <div className='mobileNavExpandedNavs'>
                    <NavLink to='/' className="mobileNavButton">Home</NavLink>
                    <NavLink to='/about' className="mobileNavButton">About</NavLink>
                    <NavLink to='/resume' className="mobileNavButton">Resume</NavLink>
                    <NavLink to='/projects' className="mobileNavButton">Projects</NavLink>
                    <NavLink to='/contact' className="mobileNavButton">Contact</NavLink>
                </div>
                <div className='mobileNavExpandedSocials'>
                    {/* GitHub */}
                    <a title="GitHub" href='https://github.com/cmarq07' target="_blank" rel="noreferrer">
                        <div className="mediaLink mobile" id="githubLink"></div>
                    </a>

                    {/* Instagram */}
                    <a title="Instagram" href='https://www.instagram.com/cmarq07' target="_blank" rel="noreferrer">
                        <div className="mediaLink mobile" id="instagramLink"></div>
                    </a>

                    {/* LinkedIn */}
                    <a title="LinkedIn" href='https://www.linkedin.com/in/chrcalloway' target="_blank" rel="noreferrer">
                        <div className="mediaLink mobile" id="linkedInLink"></div>
                    </a>
                </div>
            </motion.div>
        </>
    )
}

export default Header