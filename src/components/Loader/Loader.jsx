import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import "./Loader.css"

const commands = [
  { type: "command", text: "boot_sequence --init" },
  { type: "command", text: "loading core modules..." },
  { type: "command", text: "verifying environment..." },
  { type: "command", text: "initializing motion engine..." },

  { type: "ascii", text: `
   █████╗ ██╗  ██╗███████╗██╗  ██╗ █████╗ ████████╗
  ██╔══██╗██║ ██╔╝██╔════╝██║  ██║██╔══██╗╚══██╔══╝
  ███████║█████╔╝ ███████╗███████║███████║   ██║   
  ██╔══██║██╔═██╗ ╚════██║██╔══██║██╔══██║   ██║   
  ██║  ██║██║  ██╗███████║██║  ██║██║  ██║   ██║   
  ` },

  { type: "command", text: "rendering interface..." },
  { type: "command", text: "launching experience..." }
]

export default function Loader({ onFinish }) {
  const [displayed, setDisplayed] = useState([])
  const [currentLine, setCurrentLine] = useState("")
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  // typing effect
useEffect(() => {
  if (lineIndex >= commands.length) {
    setTimeout(onFinish, 1200)
    return
  }

  const current = commands[lineIndex]

  // ASCII block → skip typing
  if (current.type === "ascii") {
    const timeout = setTimeout(() => {
      setDisplayed(prev => [...prev, current])
      setLineIndex(prev => prev + 1)
    }, 400)

    return () => clearTimeout(timeout)
  }

  // NORMAL typing
  const timeout = setTimeout(() => {
    if (charIndex < current.text.length) {
      setCurrentLine(prev => prev + current.text[charIndex])
      setCharIndex(prev => prev + 1)
    } else {
      setDisplayed(prev => [...prev, current])
      setCurrentLine("")
      setCharIndex(0)
      setLineIndex(prev => prev + 1)
    }
  }, 25)

  return () => clearTimeout(timeout)
}, [charIndex, lineIndex])

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.1,
        filter: "blur(20px)"
      }}
      transition={{ duration: 0.6 }}
    >

      <div className="loader-noise" />
      <div className="scanlines" />

      {/* TERMINAL */}
      <motion.div
        className="loader-terminal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >

        <div className="loader-header">
          <span className="dot red"/>
          <span className="dot yellow"/>
          <span className="dot green"/>
          <span className="loader-title">system.boot</span>
        </div>

        <div className="loader-body">

          {displayed.map((item, i) => {
  if (item.type === "ascii") {
    return (
      <motion.pre
        key={i}
        className="loader-ascii"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {item.text}
      </motion.pre>
    )
  }

  return (
    <p key={i} className="line">
      <span className="prompt">{">"}</span> {item.text}
    </p>
  )
})}

          {/* CURRENT TYPING LINE */}
         {lineIndex < commands.length && commands[lineIndex]?.type === "command" && (
  <p className="line">
    <span className="prompt">{">"}</span> {currentLine}
    <span className="cursor" />
  </p>
)}

        </div>
      </motion.div>

      {/* FLASH */}
      <motion.div
        className="loader-flash"
        initial={{ opacity: 0 }}
        animate={{ opacity: lineIndex === commands.length ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

    </motion.div>
  )
}