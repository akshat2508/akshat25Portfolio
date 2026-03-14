const experiments = [


{
title:"RISC-V Assembly Experiments",
image:"/lab/riscv.jpg",
desc:"Exploring instruction pipelines and low level architecture.",
details:`
• Assembly programs
• Pipeline exploration
• Register level debugging
• ISA understanding
`
},

{
title:"Linux Automation Scripts",
image:"/lab/linux.jpg",
desc:"Shell scripts for system monitoring and automation.",
details:`
• Cron based automation
• Process monitoring
• Log parsing tools
`
},

{
title:"Computer Vision Experiments",
image:"/lab/cv.jpg",
desc:"CNN pipelines for image classification experiments.",
details:`
• CNN model testing
• OpenCV preprocessing
• dataset experiments
`
},

{
title:"System Simulations",
image:"/lab/os.jpg",
desc:"Deadlock simulation using Banker's Algorithm.",
details:`
• Resource allocation graph
• Deadlock detection
• simulation GUI
`
},
{
title:"FPV Drone Controller",
image:"/lab/drone.jpg",
desc:"Low-cost FPV drone control using Arduino + RF modules.",
details:`
• Arduino based flight controller
• RF communication module
• Custom control firmware
• Goal: ultra-low cost FPV setup
`
}
]
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import "./Lab.css"

export default function Lab(){

const ref = useRef(null)
const [active,setActive] = useState(null)

const {scrollYProgress} = useScroll({
target:ref,
offset:["start start","end end"]
})

const x = useTransform(scrollYProgress,[0,1],["60%","-10%"])

return(

<section className="lab" ref={ref}>

<div className="lab-sticky">

<div className="lab-header">

<span className="lab-tag">EXPERIMENTAL LAB</span>

<h2 className="lab-title">
Things I'm experimenting with.
</h2>

</div>

<motion.div
className="lab-track"
style={{x}}
>

{experiments.map((exp,index)=>(

<motion.div
className="lab-card"
key={index}
whileHover={{scale:1.05}}
onClick={()=>setActive(exp)}
>

<img src={exp.image} />

<h3>{exp.title}</h3>

<p>{exp.desc}</p>

</motion.div>

))}

</motion.div>

</div>


{/* MODAL */}

{active && (

<motion.div
className="lab-modal"
initial={{opacity:0}}
animate={{opacity:1}}
onClick={()=>setActive(null)}
>

<motion.div
className="lab-modal-content"
initial={{scale:0.9}}
animate={{scale:1}}
onClick={(e)=>e.stopPropagation()}
>

<h2>{active.title}</h2>

<p>{active.details}</p>

<button onClick={()=>setActive(null)}>
Close
</button>

</motion.div>

</motion.div>

)}

</section>

)
}