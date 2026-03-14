import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import "./Projects.css"
import anontalkImg from "../Projects/anontalk.png";
import dingImg from "../Projects/dingdinggo.png";
import lmsImg from "../Projects/lms.png";
import mygitImg from "../Projects/mygit.png";
import telegramImg from "../Projects/telegrambot.png";
import docuvio from "../Projects/docuvio.png"
const projects = [
{
title:"Docuvio",
desc:"Campus printing marketplace connecting students with local print shops for fast document printing and order tracking.",
tech:["React","Supabase","Flask"],
image:docuvio,
github:"https://github.com/akshat2508/Lovely_Prints",
live:"https://docuvio.co.in"
},

{
title:"Pi Pascals LMS",
desc:"Learning management system for managing courses, assignments and student submissions with real-time dashboards.",
tech:["React","Node","Supabase"],
image: lmsImg,
github:"https://github.com/akshat2508/pascals-institute",
live:"https://www.pascalsinstitute.com/admin-dashboard"
},

{
title:"AnonTalk",
desc:"Anonymous real-time chat platform where users can communicate without accounts using temporary identities.",
tech:["React","WebSockets","Node"],
image:anontalkImg,
github:"https://github.com/akshat2508/AnonTalk",
live:"https://anon-talk-web.vercel.app/"
},

{
title:"MyGit",
desc:"A lightweight local version control system inspired by Git, built to understand internal VCS mechanics and commit trees.",
tech:["C++","CLI","Systems"],
image:mygitImg,
github:"https://github.com/akshat2508/MY-GIT"
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

<section className="projects-section" id="projects">
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

{p.live && (
<a
href={p.live}
target="_blank"
rel="noopener noreferrer"
className="btn-primary"
>
Live Demo
</a>
)}

{p.github && (
<a
href={p.github}
target="_blank"
rel="noopener noreferrer"
className="btn-secondary"
>
Github
</a>
)}

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