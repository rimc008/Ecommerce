import React from 'react'
import image7 from "../assets/about_img.png"
import { div } from 'framer-motion/client';
import Bottompage from './Bottompage';
import { motion,AnimatePresence } from 'framer-motion';




const About = () => {

  const whyChooseUs = [
    {
      name: "Quality Assurance",
      description: "We ensure that every product meets high standards of quality, reliability, and durability before it reaches you."
    },
    {
      name: "Convenience",
      description: "Our platform is designed to provide a smooth and hassle-free shopping experience, from browsing to checkout."
    },
    {
      name: "Exceptional Customer Service",
      description: "We are committed to supporting our customers with prompt responses and reliable assistance at every step."
    },
    {
    name: "Fast Delivery",
    description: "We prioritize quick and reliable delivery to ensure your orders reach you on time, every time."
  }
  ];

  return (

    <AnimatePresence>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onAnimationComplete={() => window.scrollTo({top:0,behavior:"smooth" })}>

      <div style={{textAlign:"center",marginBottom:"40px"}}>
        <h1>About Us</h1>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"2fr 3fr",marginLeft:"80px",width:"1700px",gap:"20px"}}>
        <div style={{display:"flex",justifyContent:"center"}}>
          <img src={image7} style={{height:"500px",width:"450px",borderRadius:"20px",border:"solid black 3px",boxShadow:"10px 10px 0px black"}} alt="" />
        </div>

        <div style={{fontSize:"25px",width:"1000px"}}>
          <p>We are a modern e-commerce platform dedicated to offering high-quality products at competitive prices. Our goal is to make online shopping simple, convenient, and reliable for everyone.<br />We carefully select our products to ensure they meet our standards of quality and value.From browsing to checkout, we focus on providing a smooth and secure experience.Customer satisfaction is at the core of our approach, and we are committed to delivering excellent service and building long-term trust with our customers</p>

          <h4>Our Mission</h4>
          <p>Our mission is to provide high-quality products at affordable prices while delivering a seamless and trustworthy shopping experience. We aim to prioritize customer satisfaction, innovation, and reliability in everything we do.</p>
        </div>
      </div>

      <div style={{marginLeft:"180px",marginTop:"100px"}}>
        <h1>Why Choose Us?</h1>

        <div style={{display:"flex",gap:"70px"}}>
          {whyChooseUs.map((item)=> (
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"300px",border:"solid black 3px",borderRadius:"20px",padding:"20px",boxShadow:"10px 10px 0px black"}}>
              <h2>{item.name}</h2>
              {item.description}
            </div>
          ))}
        </div>

      </div>

      <div>
        <Bottompage />
      </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default About
