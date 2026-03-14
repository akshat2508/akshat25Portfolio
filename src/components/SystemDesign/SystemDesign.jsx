import { motion, useScroll, useTransform } from "framer-motion"
import {
Globe,
Server,
Database,
Cpu,
Bell
} from "lucide-react"
import { useRef } from "react"
import "./SystemDesign.css"

const icons = {
frontend: Globe,
api: Server,
db: Database,
worker: Cpu,
notify: Bell
}
const nodes = [
{ name:"Frontend", icon:"frontend" },
{ name:"API Server", icon:"api" },
{ name:"Database", icon:"db" },
{ name:"Worker Queue", icon:"worker" },
{ name:"Notifications", icon:"notify" }
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

{/* CONNECTION LINES */}

<svg className="system-lines">

<motion.line
x1="60"
y1="50"
x2="260"
y2="50"
stroke="var(--ink-30)"
strokeWidth="2"
style={{
pathLength: useTransform(scrollYProgress,[0.15,0.3],[0,1])
}}
/>

<motion.line
x1="260"
y1="50"
x2="460"
y2="50"
stroke="var(--ink-30)"
strokeWidth="2"
style={{
pathLength: useTransform(scrollYProgress,[0.35,0.5],[0,1])
}}
/>

<motion.line
x1="460"
y1="50"
x2="660"
y2="50"
stroke="var(--ink-30)"
strokeWidth="2"
style={{
pathLength: useTransform(scrollYProgress,[0.55,0.7],[0,1])
}}
/>

<motion.line
x1="660"
y1="50"
x2="860"
y2="50"
stroke="var(--ink-30)"
strokeWidth="2"
style={{
pathLength: useTransform(scrollYProgress,[0.75,0.9],[0,1])
}}
/>

</svg>


{/* NODES */}

{nodes.map((node,index)=>{

const Icon = icons[node.icon]

const x = useTransform(
scrollYProgress,
[0,1],
[0,index*200]
)

const opacity = useTransform(
scrollYProgress,
[index*0.15,index*0.2+0.2],
[0,1]
)

return(

<motion.div
className="system-node"
key={index}
style={{x,opacity}}
>

<Icon size={18} className="system-icon"/>

<span>{node.name}</span>

</motion.div>

)

})}

</div>

</div>

</div>

</section>

)
}