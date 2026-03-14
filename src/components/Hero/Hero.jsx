import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import "./Hero.css"

export default function Hero(){

const ref = useRef(null)

const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start start","end end"]
})

/* finish animation earlier */

const progress = useTransform(scrollYProgress,[0,0.6],[0,1])

/* left side animation */

const yText = useTransform(progress,[0,1],[120,0])
const opacityText = useTransform(progress,[0,0.4],[0,1])

/* terminal animation */

const terminalX = useTransform(progress,[0,1],[200,0])
const terminalScale = useTransform(progress,[0,1],[0.8,1])
const terminalOpacity = useTransform(progress,[0,0.4],[0,1])
const scrollHintOpacity = useTransform(scrollYProgress,[0,0.05],[1,0])
const scrollHintY = useTransform(scrollYProgress,[0,0.05],[0,-20])

return(

<section className="hero-section" ref={ref}>

<div className="hero-scroll">

<div className="hero-stage">

<div className="hero-grid">

{/* LEFT SIDE */}

<div className="hero-left">

<motion.div
className="hero-pill"
style={{ y:yText, opacity:opacityText }}
>

<span className="hero-dot"/>

Systems Engineer • Builder

</motion.div>


<motion.h1
className="hero-title"
style={{ y:yText, opacity:opacityText }}
>

Hi, I'm <span className="accent">Akshat.</span>

</motion.h1>


<motion.h1
className="hero-outline"
style={{ y:yText, opacity:opacityText }}
>

I build systems.

</motion.h1>


<motion.p
className="hero-desc"
style={{ y:yText, opacity:opacityText }}
>

I design and build real-world software systems — from full-stack
applications to AI tools and hardware experiments.

</motion.p>


<motion.div
className="hero-buttons"
style={{ y:yText, opacity:opacityText }}
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
style={{ y:yText, opacity:opacityText }}
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


{/* RIGHT SIDE */}

<div className="hero-right">

<motion.div
className="terminal"
style={{
x:terminalX,
scale:terminalScale,
opacity:terminalOpacity
}}
>

<div className="terminal-header">

<span className="dot red"/>
<span className="dot yellow"/>
<span className="dot green"/>

<span className="terminal-title">
akshat@system
</span>

</div>

<div className="terminal-body">

<p>$ npm run build</p>
<p>✓ compiled successfully</p>

<p>$ deploying system...</p>
<p>✓ deployment complete</p>

<p>$ launching portfolio</p>
<p className="green">✓ online</p>

</div>

</motion.div>

</div>

</div>
<motion.div
className="scroll-hint"
style={{ opacity:scrollHintOpacity, y:scrollHintY }}
>

<span>Scroll to begin</span>

<div className="scroll-wheel"/>

</motion.div>
</div>

</div>

</section>

)
}