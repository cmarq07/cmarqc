// Import Libraries
import { useState } from "react"
import { FaLongArrowAltUp } from 'react-icons/fa'

function ScrollTopButton() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        })
    }

    window.addEventListener('scroll', toggleVisible)

    return (
        <button title="Scroll to Top" onClick={scrollToTop} className={visible ? "scrollTopVisible" : "scrollTopNone"}>
            <FaLongArrowAltUp className="topArrow" />
        </button>
    )
}

export default ScrollTopButton