import {motion,AnimatePresence,Variants} from 'framer-motion'


const parentVariant: Variants = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {duration:0.2, when: "beforeChildren", staggerChildren:0.4 }},
    remove: {opacity: 0, height: '0px'}
}
const chiildVariant:Variants = {
    hidden: {x: 100,opacity:0},
    visible: {x:0,opacity:1},
    // remove: {x: 100,opacity: 0}
    
}
const Nav_Dropdown = () => {

    
  return (
    <div className='border-4 border-blue-500 w-4/5 right-0  z-20  absolute top-[4.5rem] lg:hidden bg-black text-white '>

    <AnimatePresence>
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={parentVariant}
            exit="remove"
        className=' h-[20rem] flex flex-col justify-around'>
            <motion.div 
            variants={chiildVariant}
            className='w-10/12 mx-auto border-4 h-[4rem] border-red-500'>
                <h2>Sign in with Facebook</h2>
            </motion.div>
            <motion.div 
            variants={chiildVariant}
            className='w-10/12 mx-auto border-4 h-[4rem] border-red-500'>

            </motion.div>
            <motion.div 
            variants={chiildVariant}
            className='w-10/12 mx-auto border-4 h-[4rem] border-red-500'>
            </motion.div>
        </motion.div>
    </AnimatePresence>
    </div>

  )
}

export default Nav_Dropdown