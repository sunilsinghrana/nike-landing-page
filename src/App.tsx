import "./App.css";
import Navbar from '../components/Navbar'
import { motion } from "framer-motion";
import shoeImage from '../public/assets/nikeshoes.png'
import shoeBanner01 from '../public/assets/pngegg (1).png'
import shoeBanner02 from '../public/assets/pngegg (2).png'
import shoeBanner03 from '../public/assets/pngegg.png'

function App() {
  const nikeText = {
    init: {
      opacity: 0,
      scale: 0
    },
    visible:{
      opacity: 1,
      scale: 1,
      transition: {
        duration : 1.3,
        delay: 0.8,
        type: "spring"
      }
    }
  }

  const circleAnimation = {
    init:{
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition:{
        delay: 0.8,
        duration: 1.3,
        type: "tween"
      }
    }
  }

  const nikeShoes = {
    init:{
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: "-10deg",
      transition:{
        delay: 1.5,
        duration: 1.3,
        type: "tween"
      }
    }
  }

  const sizeAvailableAnimation = {
    init:{
      opacity: 0,
    },
    visible:{
      opacity:1,
      transition:{
        duration:1,
        delay: 0.5
      }
    }
  }
  

  return (
    <div className="">
      <div className="absolute bg-[#EFF1F3] w-[50%] h-full z-1"></div>
      <motion.div variants={circleAnimation} initial="init" animate="visible" className="absolute right-0 bg-white w-[50%] h-full z-1">
        <p className="ml-6 text-[10rem] font-black text-[#EFF1F3] text-left" >JUST</p>
        <p className="ml-6 text-[10rem] font-black text-[#EFF1F3] text-left">DO</p>
        <p className="ml-6 text-[10rem] font-black text-[#EFF1F3] text-left">IT.</p>
      </motion.div>
      <div className="relative bg-transparent mt-8 z-10">
        <Navbar/>
      </div>
      <div className="relative h-[100vh] w-full z-10 flex justify-evenly items-center">
        <motion.div variants={nikeText} initial="init" animate="visible" className="relative bottom-32 w-[30%]">
          <h1 className="text-7xl font-bold m-2">NIKE AIR</h1>
          <h1 className="text-7xl font-bold m-2">MAX PRE-DAY</h1>
          <p className="text-lg text-gray-500 my-4 mx-2">Taking the classic look of heritage Nike Running into a new realm, the Nike Air Max Pre-Day brings you a fast-paced look that's ready for today's world. A true nod to the past with a design made from at least 20% recycled material by weight.</p>
          <div className="mx-2 my-3 flex justify-between">
            <button className="text-white bg-black py-3 px-8 rounded-md font-bold">Add to Bag</button>
            <p className="text-4xl relative right-60 font-bold">$10,500</p>
          </div>
        </motion.div>
        <motion.div variants={nikeShoes} initial="init" animate="visible" className="relative z-10 left-16 flex justify-center items-center">
          <img src={shoeImage} alt="shoes_image" width={900} height={500} />
        </motion.div>
      </div>
      <motion.div variants={sizeAvailableAnimation} initial="init" animate="visible" className="absolute bottom-12 left-36 bg-transparent h-[250px] w-[40%] z-10 flex rounded-md">
        <div className="w-fit bg-white m-4">
          <img src={shoeBanner01} alt="shoesbanner" width={700} height={700} />
        </div>
        <div className="w-fit bg-white m-4">
          <img src={shoeBanner02} alt="shoesbanner"  width={700} height={700} />
        </div>
        <div className="w-fit bg-white m-4">
          <img src={shoeBanner03} alt="shoesbanner"  width={700} height={700} />
        </div>
      </motion.div>
    </div>
  );
}

export default App;
