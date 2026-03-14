import { motion } from "framer-motion"
import "./ActivityTicker.css"

const activities = [

"🟢 Deploying backend to AWS",
"⚙ Training skin cancer classification model",
"📦 Shipping Docuvio v2",
"🧠 Learning RISC-V assembly",
"🔧 Building FPV drone controller",
"💻 Optimizing Supabase queries",
"🚀 Designing system architecture",
"📊 Running algorithm benchmarks",

]

export default function ActivityTicker(){

const items = [...activities,...activities]

return(

<div className="ticker">

<div className="ticker-label">

LIVE ACTIVITY

</div>

<div className="ticker-track">

<motion.div
className="ticker-inner"
animate={{x:["0%","-50%"]}}
transition={{
duration:22,
repeat:Infinity,
ease:"linear"
}}
>

{items.map((item,index)=>(

<span
key={index}
className="ticker-item"
>

{item}

</span>

))}

</motion.div>

</div>

</div>

)

}