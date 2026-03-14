import { motion } from "framer-motion"
import "./About.css"

export default function About(){

return(

<section className="about" id="about">

<div className="about-container">

<motion.div
className="about-left"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>

<span className="about-tag">

ENGINEER PHILOSOPHY

</span>

<h2 className="about-title">

Engineer first.<br/>
Problem solver always.

</h2>

<p className="about-desc">

I enjoy building systems that solve real-world problems.  
From full-stack platforms and AI models to system simulators
and hardware experiments.

My work focuses on **performance, architecture, and usability** —
turning complex workflows into clean, scalable software.

</p>

</motion.div>


<motion.div
className="about-right"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:0.2}}
viewport={{once:true}}
>

<div className="about-stat">

<span className="stat-number">20+</span>
<span className="stat-label">Projects Built</span>

</div>

<div className="about-stat">

<span className="stat-number">6+</span>
<span className="stat-label">Technologies</span>

</div>

<div className="about-stat">

<span className="stat-number">3</span>
<span className="stat-label">Production Systems</span>

</div>

<div className="about-stat">

<span className="stat-number">100k+</span>
<span className="stat-label">Lines of Code</span>

</div>

</motion.div>

</div>

</section>

)

}