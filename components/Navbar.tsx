import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from 'framer-motion';

function Navbar() {
  const navbarAnimation = {
    init:{
      opacity:0,
    },
    visible:{
      opacity:1,
      transition:{
        duration:0.6,
        delayChildren: 1.5,
        staggerChildren: 0.2
      }
    }
  }

  const navbarItemAnimation = {
    init:{
      opacity:0,
      y: "-20px",
      x: "-40px",
    },
    visible:{
      opacity: 1,
      y:0,
      x:0,
    }
  }

  return (
    <motion.nav variants={navbarAnimation} initial="init" animate="visible" className="flex justify-around items-center">
          <motion.img variants={navbarItemAnimation} src="/public/assets/nikelogo.png" alt="logo" width={80} height={40} />
          <motion.ul variants={navbarItemAnimation} className="flex justify-center items-center">
            <li className="text-lg font-bold mx-3 cursor-pointer">HOME</li>
            <li className="text-lg font-bold mx-3 cursor-pointer">ABOUT</li>
            <li className="text-lg font-bold mx-3 cursor-pointer">PRODUCTS</li>
            <li className="text-lg font-bold mx-3 cursor-pointer">SUPPORT</li>
          </motion.ul>
          <div className="flex justify-evenly w-28 items-center">
            <motion.div variants={navbarItemAnimation} className="w-10 h-10 rounded-[50%] flex justify-center items-center bg-orange-400 cursor-pointer">
              <AiOutlineShoppingCart width={25} height={25} />
            </motion.div>
            <motion.div variants={navbarItemAnimation} className="cursor-pointer">
              <GiHamburgerMenu width={25} height={25} />
            </motion.div>
          </div>
        </motion.nav>
  )
}

export default Navbar
