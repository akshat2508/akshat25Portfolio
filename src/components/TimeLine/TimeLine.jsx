import { motion } from "framer-motion"
import { useState } from "react"
import "./Timeline.css"


const experience = [
{
title:"Full Stack Developer",
org:"PI Pascals Institute",
date:"Aug 2025 – Feb 2026",
desc:"Designed and built a scalable Learning Management System used by 5000+ students and instructors. Developed analytics dashboards, scheduling workflows and role-based access systems. Optimized database queries and backend APIs reducing response times by ~35%. Stack: Angular, Node.js, PostgreSQL, AWS."},
{
title:"Full Stack Developer Intern",
org:"PI Pascals Institute",
date:"Jul 2025 – Aug 2025",
desc:"Engineered onboarding flows and modular course management features for a production LMS platform. Built responsive UI components using Angular and Tailwind and implemented REST APIs for enrollment, progress tracking and content delivery."},
{
title:"Mobile Developer Intern",
org:"StudyGyaan – Appsycle",
date:"Sept 2024 – Oct 2024",
desc:"Built modular Flutter UI components and optimized rendering performance for an education mobile app. Implemented reusable widget systems and improved navigation flow to enhance user engagement and reduce UI latency."}
]


const education = [
{
title:"B.Tech Computer Science",
org:"Lovely Professional University",
date:"Aug 2023 – Present",
desc:"CGPA: 8.25"
},
{
title:"Senior Secondary",
org:"Ramisht Twinkling Star Public School",
date:"2021 – 2023",
desc:"89.8%"
},
{
title:"Secondary",
org:"Ramisht Twinkling Star Public School",
date:"2020 – 2021",
desc:"87.4%"
}
]

export default function Timeline(){

const [tab,setTab] = useState("experience")

const data = tab === "experience" ? experience : education

return(

<section className="timeline-section">

<div className="timeline-container">

<div className="timeline-header">

<span className="timeline-tag">TIMELINE</span>

<h2 className="timeline-title">My journey so far.</h2>

</div>

<div className="timeline-toggle">

<button
className={tab==="experience"?"active":""}
onClick={()=>setTab("experience")}
>
Experience
</button>

<button
className={tab==="education"?"active":""}
onClick={()=>setTab("education")}
>
Education
</button>

</div>

<div className="timeline">

{data.map((item,index)=>(

<motion.div
key={index}
className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}

initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}

transition={{duration:0.6}}
viewport={{once:true}}
>

<div className="timeline-node"/>

<div className="timeline-card">

<span className="timeline-date">{item.date}</span>

<h3>{item.title}</h3>

<h4>{item.org}</h4>

<p>{item.desc}</p>

</div>

</motion.div>

))}

</div>

</div>

</section>

)
}