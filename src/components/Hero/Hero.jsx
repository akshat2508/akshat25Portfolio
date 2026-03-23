// import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
// import { useRef } from "react"
// import "./Hero.css"

// export default function Hero(){

// const ref = useRef(null)
// const rotateX = useMotionValue(0)
// const rotateY = useMotionValue(0)

// const smoothRotateX = useSpring(rotateX, { stiffness: 120, damping: 20 })
// const smoothRotateY = useSpring(rotateY, { stiffness: 120, damping: 20 })

// const { scrollYProgress } = useScroll({
//   target: ref,
//   offset: ["start start","end end"]
// })

// function handleMouseMove(e) {

// const rect = e.currentTarget.getBoundingClientRect()

// const x = e.clientX - rect.left
// const y = e.clientY - rect.top

// const centerX = rect.width / 2
// const centerY = rect.height / 2

// const rotateXValue = -(y - centerY) / 20
// const rotateYValue = (x - centerX) / 20

// rotateX.set(rotateXValue)
// rotateY.set(rotateYValue)

// }

// function handleMouseLeave() {

// rotateX.set(0)
// rotateY.set(0)

// }
// /* finish animation earlier */

// const progress = useTransform(scrollYProgress,[0,0.6],[0,1])

// /* left side animation */

// const yText = useTransform(progress,[0,1],[120,0])
// const opacityText = useTransform(progress,[0,0.4],[0,1])

// /* terminal animation */

// const terminalX = useTransform(progress,[0,1],[200,0])
// const terminalScale = useTransform(progress,[0,1],[0.8,1])
// const terminalOpacity = useTransform(progress,[0,0.4],[0,1])
// const scrollHintOpacity = useTransform(scrollYProgress,[0,0.05],[1,0])
// const scrollHintY = useTransform(scrollYProgress,[0,0.05],[0,-20])

// return(

// <section className="hero-section" ref={ref}>

// <div className="hero-scroll">

// <div className="hero-stage">

// <div className="hero-grid">

// {/* LEFT SIDE */}

// <div className="hero-left">

// <motion.div
// className="hero-pill"
// style={{ y:yText, opacity:opacityText }}
// >

// <span className="hero-dot"/>

// Systems Engineer • Builder

// </motion.div>


// <motion.h1
// className="hero-title"
// style={{ y:yText, opacity:opacityText }}
// >

// Hi, I'm <span className="accent">Akshat.</span>

// </motion.h1>


// <motion.h1
// className="hero-outline"
// style={{ y:yText, opacity:opacityText }}
// >

// I build systems.

// </motion.h1>


// <motion.p
// className="hero-desc"
// style={{ y:yText, opacity:opacityText }}
// >

// I design and build real-world software systems — from full-stack
// applications to AI tools and hardware experiments.

// </motion.p>


// <motion.div
// className="hero-buttons"
// style={{ y:yText, opacity:opacityText }}
// >

// <a className="btn-primary" href="#projects">
// View Projects →
// </a>

// <a className="btn-secondary" href="#">
// Resume
// </a>

// </motion.div>


// <motion.div
// className="hero-stats"
// style={{ y:yText, opacity:opacityText }}
// >

// <div className="stat">
// <span className="stat-number">20+</span>
// <span className="stat-label">Projects</span>
// </div>

// <div className="stat">
// <span className="stat-number">6+</span>
// <span className="stat-label">Tech Stacks</span>
// </div>

// <div className="stat">
// <span className="stat-number">3</span>
// <span className="stat-label">Systems Built</span>
// </div>

// </motion.div>

// </div>


// {/* RIGHT SIDE */}

// <div className="hero-right">

// <motion.div
// className="terminal"
// style={{
// x:terminalX,
// scale:terminalScale,
// opacity:terminalOpacity,
// rotateX: smoothRotateX,
// rotateY: smoothRotateY,
// transformPerspective: 1000
// }}
// onMouseMove={handleMouseMove}
// onMouseLeave={handleMouseLeave}
// >
  
// <div className="terminal-header">

// <span className="dot red"/>
// <span className="dot yellow"/>
// <span className="dot green"/>

// <span className="terminal-title">
// akshat@system
// </span>

// </div>

// <div className="terminal-body">
//   <p>$ Akshat Paul...</p>
// <p>✓ deploying ASCII</p>

// <pre className="ascii-art">
// {`
// ********************************************************************************
// ********************************************************************************
// *********************************##*********************************************
// ******************************##########****************************************
// ***********************#######*+====+****#####**********************************
// *********************##**+==-:.     ..::::::-+*#********************************
// **********************=...                    :-+*******************************
// ****************##*#=.    .             .        :+#****************************
// ********#***#######*-                              =#####***********************
// **********#########*=-. ......:::.                 .*####***********************
// **********##########**:-++++++***+=-:::..           =####***********************
// **********############++************++=-:..         =#####**********************
// *********#############*+*********+++*++=-:...      .*#####**********************
// ***********###########=:-+**+-:::--==+++++-....    :#######*********************
// ***********###########-:::=*+-::-==-==++**+:...    =#######*********************
// **********############+::-+*+=-:::---=+***+-..:--=-+######**********************
// ********##############*--****++++++*******+-.-+==+++######**********************
// *****#################*+**********####**+++=:=+==+++#######*********************
// ******################****+++++**###***+++===+++*++*#######*********************
// *****#################**+-:--+*********+++====+++*########**********************
// *****#################*=::-----:-**+++++++===---+########***********************
// ********###############=--=======++++++++==-====########************************
// *****##################*++==+****++==+===---=+=*#######*************************
// *****###################++*****++====-----=+++=*#######*************************
// ******##################+-=+=---::-::----=++++=+###*****************************
// ******##################*=::::..:::---==++++++==#=*#****************************
// #########**################***======++++++++++=*%-.*##**************************
// *############################*++++++++++***+++#%#. .=*#*************************
// **#########################*+*++++++++******#%%#:    :+**##*********************
// **********#############*=-:..#*++*********#%%%#- ...   .:-+**#******************
// **********########**+-:.  ...#%#++*+++*##%%%%#- ......    ..:-+*****************
// ***********###*+=-:.   ......#%%%*+**#%%%%%%%=........  ....  ..:-=+************
// **********#*=:..   ..  .... :%#+-:--=#%%%%%%=.........  ........   ..:=+********
// *********#+.  ..............=#+.......-#%%%+.......    .............   ..:=+****
// ********#*. ...............:*##*.....:-+#%*..............................   -***
// ********#= ............... -#%%#:...=*#%%#:..............................    =**
// ********#- ............... =%%%#:..-%%%%%=........... ..................     :**
// *********: ................+%%%*:..:#%%%*........... ..................      .+*
// *********. ................*%%#-.:::*%%#:.............................        =*
// ********+. ................*%%+.::::*%%-.......................... ..         .+
// ********=. ................#%#:.::::*%+..........................  .           :
// ********:  ................#%=..::::##:.........................  .             
// ********:   ...............##:..::.:#-.........................   .             
// ********:   ...............#*...::.=+........................    .              
// *******+..  ...............#+...::.=:........ ...........  .     .              
// *******= .  ...............*-..:::.......... ..........          ..             
// *******-     ..............+:..:::....................                          
// *******:     ..............-...::........  ..........                           
// *******.     ..................::.......  .........                             
// *******.     ........ ..... ...:.......  ..........                             
// *******.      ....... ..... ..........  ...........                             
// ******+.      ........ .... .........   .........                               
// ++****-       ........ ....  .......   .........                                
// ++****.        .......  ...  ......    .......                                  
// ++++*+.        ....     ..   ....     ......                                    
// ++++*=         ...       .   ...     .......                                    
// `}
// </pre>
// </div>

// </motion.div>

// </div>

// </div>
// <motion.div
// className="scroll-hint"
// style={{ opacity:scrollHintOpacity, y:scrollHintY }}
// >

// <span>Scroll to begin</span>

// <div className="scroll-wheel"/>

// </motion.div>
// </div>

// </div>

// </section>

// )
// }





import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring
} from "framer-motion"
import { useRef, useState, useEffect } from "react"
import "./Hero.css"

/* ========================= */
/* TYPEWRITER HOOK */
/* ========================= */
function useTypewriter(text, speed = 40) {
  const [output, setOutput] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setOutput("")
    setIndex(0)
  }, [text])

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setOutput(prev => prev + text[index])
        setIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [index, text])

  return output
}

export default function Hero() {

  const ref = useRef(null)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const smoothRotateX = useSpring(rotateX, { stiffness: 120, damping: 20 })
  const smoothRotateY = useSpring(rotateY, { stiffness: 120, damping: 20 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  })

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateXValue = -(y - centerY) / 20
    const rotateYValue = (x - centerX) / 20

    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  /* ========================= */
  /* SCROLL ANIMATIONS */
  /* ========================= */

  const progress = useTransform(scrollYProgress, [0, 0.6], [0, 1])

  const yText = useTransform(progress, [0, 1], [120, 0])
  const opacityText = useTransform(progress, [0, 0.4], [0, 1])

  const terminalX = useTransform(progress, [0, 1], [200, 0])
  const terminalScale = useTransform(progress, [0, 1], [0.8, 1])
  const terminalOpacity = useTransform(progress, [0, 0.4], [0, 1])

  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])
  const scrollHintY = useTransform(scrollYProgress, [0, 0.05], [0, -20])

  /* ========================= */
  /* HERO TYPING */
  /* ========================= */

  const typedName = useTypewriter("Hi, I'm Akshat.", 40)

  const words = [
  "systems.",
  "tools.",
  "products."
]

  const [roleIndex, setRoleIndex] = useState(0)
  const typedWord = useTypewriter(words[roleIndex], 40)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  /* ========================= */
  /* TERMINAL TYPING */
  /* ========================= */

  const terminalLines = [
    "$ whoami",
    "Akshat Paul",
    "$ initializing portfolio...",
    "$ rendering UI",
    "✓ deploying experience"
  ]

  const [terminalOutput, setTerminalOutput] = useState([])
  const [currentLine, setCurrentLine] = useState("")
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (lineIndex >= terminalLines.length) return

    const timeout = setTimeout(() => {
      const full = terminalLines[lineIndex]

      if (charIndex < full.length) {
        setCurrentLine(prev => prev + full[charIndex])
        setCharIndex(prev => prev + 1)
      } else {
        setTerminalOutput(prev => [...prev, full])
        setCurrentLine("")
        setCharIndex(0)
        setLineIndex(prev => prev + 1)
      }
    }, 20)

    return () => clearTimeout(timeout)
  }, [charIndex, lineIndex])

  return (
    <section className="hero-section" ref={ref}>
      <div className="hero-scroll">
        <div className="hero-stage">
          <div className="hero-grid">

            {/* LEFT */}
            <div className="hero-left">

              <motion.div
                className="hero-pill"
                style={{ y: yText, opacity: opacityText }}
              >
                <span className="hero-dot" />
                Systems Engineer • Builder
              </motion.div>

              <motion.h1
                className="hero-title"
                style={{ y: yText, opacity: opacityText }}
              >
                {typedName}
                {/* <span className="cursor" /> */}
              </motion.h1>

              <motion.h1
  className="hero-outline"
  style={{ y: yText, opacity: opacityText }}
>
  I build<br></br>{" "}
  <span className="dynamic-word">
    {typedWord}
  </span>
</motion.h1>

              <motion.p
                className="hero-desc"
                style={{ y: yText, opacity: opacityText }}
              >
                I design and build real-world software systems — from full-stack
                applications to AI tools and hardware experiments.
              </motion.p>

              <motion.div
                className="hero-buttons"
                style={{ y: yText, opacity: opacityText }}
              >
                <a className="btn-primary" href="#projects">
                  View Projects →
                </a>

                <a className="btn-secondary" href="#">
                  Resume
                </a>
              </motion.div>

              <motion.div
                className="hero-stats"
                style={{ y: yText, opacity: opacityText }}
              >
                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Projects</span>
                </div>

                <div className="stat">
                  <span className="stat-number">6+</span>
                  <span className="stat-label">Tech Stacks</span>
                </div>

                <div className="stat">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Systems Built</span>
                </div>
              </motion.div>

            </div>

            {/* RIGHT */}
            <div className="hero-right">

              <motion.div
                className="terminal"
                style={{
                  x: terminalX,
                  scale: terminalScale,
                  opacity: terminalOpacity,
                  rotateX: smoothRotateX,
                  rotateY: smoothRotateY,
                  transformPerspective: 1000
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >

                <div className="terminal-header">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                  <span className="terminal-title">akshat@system</span>
                </div>

                <div className="terminal-body">

                  {terminalOutput.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}

                  {lineIndex < terminalLines.length && (
                    <p>
                      {currentLine}
                      <span className="cursor" />
                    </p>
                  )}

                  {/* YOU CAN DROP ASCII HERE */}
                  {/* <pre className="ascii-art">...</pre> */}

<pre className="ascii-art">
{`
********************************************************************************
********************************************************************************
*********************************##*********************************************
******************************##########****************************************
***********************#######*+====+****#####**********************************
*********************##**+==-:.     ..::::::-+*#********************************
**********************=...                    :-+*******************************
****************##*#=.    .             .        :+#****************************
********#***#######*-                              =#####***********************
**********#########*=-. ......:::.                 .*####***********************
**********##########**:-++++++***+=-:::..           =####***********************
**********############++************++=-:..         =#####**********************
*********#############*+*********+++*++=-:...      .*#####**********************
***********###########=:-+**+-:::--==+++++-....    :#######*********************
***********###########-:::=*+-::-==-==++**+:...    =#######*********************
**********############+::-+*+=-:::---=+***+-..:--=-+######**********************
********##############*--****++++++*******+-.-+==+++######**********************
*****#################*+**********####**+++=:=+==+++#######*********************
******################****+++++**###***+++===+++*++*#######*********************
*****#################**+-:--+*********+++====+++*########**********************
*****#################*=::-----:-**+++++++===---+########***********************
********###############=--=======++++++++==-====########************************
*****##################*++==+****++==+===---=+=*#######*************************
*****###################++*****++====-----=+++=*#######*************************
******##################+-=+=---::-::----=++++=+###*****************************
******##################*=::::..:::---==++++++==#=*#****************************
#########**################***======++++++++++=*%-.*##**************************
*############################*++++++++++***+++#%#. .=*#*************************
**#########################*+*++++++++******#%%#:    :+**##*********************
**********#############*=-:..#*++*********#%%%#- ...   .:-+**#******************
**********########**+-:.  ...#%#++*+++*##%%%%#- ......    ..:-+*****************
***********###*+=-:.   ......#%%%*+**#%%%%%%%=........  ....  ..:-=+************
**********#*=:..   ..  .... :%#+-:--=#%%%%%%=.........  ........   ..:=+********
*********#+.  ..............=#+.......-#%%%+.......    .............   ..:=+****
********#*. ...............:*##*.....:-+#%*..............................   -***
********#= ............... -#%%#:...=*#%%#:..............................    =**
********#- ............... =%%%#:..-%%%%%=........... ..................     :**
*********: ................+%%%*:..:#%%%*........... ..................      .+*
*********. ................*%%#-.:::*%%#:.............................        =*
********+. ................*%%+.::::*%%-.......................... ..         .+
********=. ................#%#:.::::*%+..........................  .           :
********:  ................#%=..::::##:.........................  .             
********:   ...............##:..::.:#-.........................   .             
********:   ...............#*...::.=+........................    .              
*******+..  ...............#+...::.=:........ ...........  .     .              
*******= .  ...............*-..:::.......... ..........          ..             
*******-     ..............+:..:::....................                          
*******:     ..............-...::........  ..........                           
                                
`}
</pre>

                </div>

              </motion.div>

            </div>

          </div>

          <motion.div
            className="scroll-hint"
            style={{ opacity: scrollHintOpacity, y: scrollHintY }}
          >
            <span>Scroll to begin</span>
            <div className="scroll-wheel" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}