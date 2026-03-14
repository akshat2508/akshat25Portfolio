import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import "./Skills.css"

const skills = [
{
title:"Backend Systems",
tech:["Python","Flask","Supabase","REST APIs"]
},
{
title:"Frontend",
tech:["React","JavaScript","Framer Motion","CSS"]
},
{
title:"Systems",
tech:["C++","Operating Systems","Algorithms"]
},
{
title:"AI / ML",
tech:["Computer Vision","Model Training","Data Processing"]
},
{
title:"Database",
tech:["PostgreSQL","Supabase","Query Optimization"]
},
{
title:"Hardware / Experiments",
tech:["Arduino","Robotics","FPV Systems"]
}
]

export default function Skills(){

const ref = useRef(null)

const { scrollYProgress } = useScroll({
target: ref,
offset: ["start start","end end"]
})

/* Card positions */

const xPositions = [
useTransform(scrollYProgress,[0,0.8],[0,-350]),
useTransform(scrollYProgress,[0,0.8],[0,0]),
useTransform(scrollYProgress,[0,0.8],[0,350]),
useTransform(scrollYProgress,[0,0.8],[0,-200]),
useTransform(scrollYProgress,[0,0.8],[0,200]),
useTransform(scrollYProgress,[0,0.8],[0,0])
]

const yPositions = [
useTransform(scrollYProgress,[0,1],[0,-120]),
useTransform(scrollYProgress,[0,1],[0,-120]),
useTransform(scrollYProgress,[0,1],[0,-120]),
useTransform(scrollYProgress,[0,1],[0,120]),
useTransform(scrollYProgress,[0,1],[0,120]),
useTransform(scrollYProgress,[0,1],[0,280])
]

const rotate = useTransform(scrollYProgress,[0,1],[-8,0])
const scale = useTransform(scrollYProgress,[0,1],[0.85,1])

return(

<section className="skills-section">

<div className="skills-scroll" ref={ref}>

<div className="skills-sticky">

<div className="skills-header">

<span className="skills-tag">TECH STACK</span>

<h2 className="skills-title">
Technologies I build with.
</h2>

</div>

<div className="skills-stage">

{skills.map((skill,index)=>{

return(

<motion.div
key={index}
className="skill-card"
style={{
x:xPositions[index],
y:yPositions[index],
rotate,
scale
}}
>

<h3 className="skill-title">
{skill.title}
</h3>

<div className="skill-tech">

{skill.tech.map((t,i)=>(
<span key={i} className="tech-pill">
{t}
</span>
))}

</div>

</motion.div>

)

})}

</div>

</div>

</div>

</section>

)

}