// Import Libraries
import { useEffect } from "react"
import { motion } from "framer-motion"

const Page = (props) => {
    useEffect(() => {
        document.title = props.title || ""
    }, [props.title])

    return (
        <motion.div
            className={"body" + (props.title === "Home" ? " home" : "")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
        >
            {props.children}
        </motion.div>
    )
}

export default Page