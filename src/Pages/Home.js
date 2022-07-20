// Import Libraries
import { motion } from 'framer-motion'

function Home() {
    

    return (
        <motion.div
            className="body home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
        >
            <h1>Welcome!</h1>

            <div className="contentBox">
                <p>
                    Hello there! My name is Christian Calloway and I am currently interning at Microsoft as a Software Engineer.
                </p>

                <p>
                    I recently graduated from the University of Washington with a degree in Informatics!
                </p>
            </div>

            <div className="contentBox">
                <p>
                    I built this site from scratch using React, HTML, CSS, and JavaScript.
                </p>
                <p>
                    You can explore some different pages, such as my about page, resume, and projects. You can also contact me about any content you see on the website!
                </p>
            </div>
        </motion.div>
    )
}

export default Home