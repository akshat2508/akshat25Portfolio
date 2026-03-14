import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import "./Projects.css"

const projects = [
{
title:"Docuvio",
desc:"Campus printing marketplace connecting students with print shops.",
tech:["React","Supabase","Flask"],
image:"/projects/docuvio.png"
},
{
title:"Banker's Algorithm Simulator",
desc:"Deadlock avoidance simulator with resource allocation graphs.",
tech:["C++","Algorithms","OS"],
image:"/projects/bankers.png"
},
{
title:"Resume Screening AI",
desc:"Machine learning system that ranks resumes vs job descriptions.",
tech:["Python","Flask","ML"],
image:"/projects/resume.png"
},
{
title:"Deadlock Detection Toolkit",
desc:"Interactive OS visualization for wait-for graphs and deadlock recovery.",
tech:["Python","PyQt"],
image:"/projects/deadlock.png"
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