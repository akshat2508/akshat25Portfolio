import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import "./Projects.css"

const projects = [
{
title:"Docuvio",
desc:"Campus printing marketplace connecting students with local print shops for fast document printing and order tracking.",
tech:["React","Supabase","Flask"],
image:"/projects/docuvio.png",
github:"https://github.com/yourusername/docuvio",
live:"https://docuvio.com"
},

{
title:"Pi Pascals LMS",
desc:"Learning management system for managing courses, assignments and student submissions with real-time dashboards.",
tech:["React","Node","Supabase"],
image:"/projects/pipascals.png",
github:"https://github.com/yourusername/pi-pascals-lms",
live:"https://pipascals.com"
},

{
title:"AnonTalk",
desc:"Anonymous real-time chat platform where users can communicate without accounts using temporary identities.",
tech:["React","WebSockets","Node"],
image:"/projects/anontalk.png",
github:"https://github.com/yourusername/anontalk",
live:"https://anontalk.app"
},

{
title:"MyGit",
desc:"A lightweight local version control system inspired by Git, built to understand internal VCS mechanics and commit trees.",
tech:["C++","CLI","Systems"],
image:"/projects/localgit.png",
github:"https://github.com/yourusername/localgit"
}
]
export default function Projects(){

const ref = useRef(null)

const { scrollYProgress } = useScroll({
target: ref
})

const x = useTransform(
scrollYProgress,
[0,1],
["0%", `-${(projects.length - 1) * 50}%`]//chane the value after * to controlhoriuzontal length of the scroll 
)

const scrollLength = projects.length * 50// chjange this value as well 

return(

<section className="projects-section">
<h2 className="Project-header">
My Projects</h2>
<div
className="projects-scroll"
ref={ref}
style={{height:`${scrollLength}vh`}}
>
<div className="projects-sticky">

<motion.div className="projects-track" style={{x}}>

{projects.map((p,i)=>(
<div key={i} className="project-card">

<div className="project-left">

<h2 className="project-title">
{p.title}
</h2>

<p className="project-desc">
{p.desc}
</p>

<div className="project-tech">
{p.tech.map((t,index)=>(
<span key={index} className="tech-pill">{t}</span>
))}
</div>

<div className="project-buttons">

<a className="btn-primary">Live Demo</a>

<a className="btn-secondary">Github</a>

</div>

</div>


<div className="project-preview">

<img src={p.image} alt={p.title}/>

</div>

</div>
))}

</motion.div>

</div>

</div>

</section>

)
}