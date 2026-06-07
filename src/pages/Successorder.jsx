import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, PartyPopper } from 'lucide-react'

const Successorder = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to top,black,white,#ec1681)",
        height: "120vh", // Changed from 110vh to perfectly fit the screen
        width: "100%",  // Explicitly lock the width too
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative" // Keeps absolute children contained
      }}
    >
      {/* Floating Party Icons */}
      {[...Array(12)].map((_, index) => (
        <motion.div
          key={index}
          initial={{
            y: "-10vh", // Start just above the screen
            x: Math.random() * 1200 - 600,
            rotate: 0,
            opacity: 0
          }}
          animate={{
            y: "110vh", // Fall completely past the bottom of any screen size
            rotate: 360,
            opacity: [0, 1, 1, 0] // Fade in at top, fade out before hitting the hard bottom
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "linear"
          }}
          style={{
            position: "absolute",
            color: "white",
            pointerEvents: "none" // Prevents icons from blocking clicks on the card
          }}
        >
          <PartyPopper size={35} />
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          height: "500px",
          width: "500px",
          backgroundColor: "white",
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "50px 50px 20px rgba(0,0,0,0.4)",
          zIndex: 1 // Ensures the card stays on top of the confetti
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{
            type: "spring",
            stiffness: 200
          }}
        >
          <CheckCircle
            size={140}
            color="#22c55e"
            strokeWidth={1.5}
          />
        </motion.div>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: "45px",
            marginTop: "30px",
            color: "#111",
            fontWeight: "bold",
            textAlign:"center"
          }}
        >
          Your order has been placed 🎉
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: "22px",
            color: "gray",
            marginTop: "10px"
          }}
        >
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Successorder