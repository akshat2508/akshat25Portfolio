import { motion } from "framer-motion"
import "./Lab.css"

const experiments = [

{
title:"FPV Drone Controller",
desc:"Building a low-cost FPV drone control system using Arduino and RF communication."
},

{
title:"RISC-V Assembly Experiments",
desc:"Learning low-level architecture by writing assembly programs and exploring instruction pipelines."
},

{
title:"Linux Automation Scripts",
desc:"Shell scripts and system utilities for automating tasks and monitoring system processes."
},

{
title:"Computer Vision Experiments",
desc:"Testing image classification pipelines and experimenting with CNN models."
},

{
title:"System Simulations",
desc:"Simulating deadlocks and resource allocation using Banker's Algorithm."
}

]

export default function Lab(){

return(

<section className="lab" id="lab">

<div className="lab-container">

<div className="lab-header">

<span className="lab-tag">
EXPERIMENTAL LAB
</span>

<h2 className="lab-title">
Things I'm experimenting with.
</h2>

</div>


<div className="lab-grid">

{experiments.map((exp,index)=>(

<motion.div
className="lab-card"
key={index}

initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}

transition={{duration:0.5,delay:index*0.1}}

viewport={{once:true}}

>

<h3 className="lab-card-title">
{exp.title}
</h3>

<p className="lab-card-desc">
{exp.desc}
</p>

</motion.div>

))}

</div>

</div>

</section>

)

}