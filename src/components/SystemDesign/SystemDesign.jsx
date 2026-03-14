import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import "./SystemDesign.css"

const nodes = [
  "Frontend",
  "API Server",
  "Database",
  "Worker Queue",
  "Notifications"
]

export default function SystemDesign(){

const ref = useRef(null)

const { scrollYProgress } = useScroll({
  target: ref,
  offset:["start start","end end"]
})

return(

<section className="system" ref={ref}>

<div className="system-sticky">

<div className="system-container">

<div className="system-header">

<span className="system-tag">SYSTEM DESIGN</span>

<h2 className="system-title">
How I build systems.
</h2>

<p className="system-desc">
I focus on building scalable architectures where components
work together seamlessly — from frontend clients to backend
services and asynchronous workers.
</p>

</div>

<div className="system-flow">

{nodes.map((node,index)=>{

const x = useTransform(
scrollYProgress,
[0,1],
[0,index*220]
)

return(

<motion.div
className="system-node"
key={index}
style={{x}}
>

{node}

</motion.div>

)

})}

</div>

</div>

</div>

</section>

)
}