import { motion } from "framer-motion"
import { PropsWithChildren } from "react"

interface InCardFragmentProps extends PropsWithChildren {}

export const InCardFragment = (props: InCardFragmentProps) => {
    const { children } = props
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
        >
            {children}
        </motion.div>
    )
}
