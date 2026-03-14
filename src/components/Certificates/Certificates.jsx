const certificates = [

{
title:"Operating Systems",
issuer:"NPTEL",
image:"/certs/os.png",
link:"/certs/os.pdf"
},

{
title:"Data Structures & Algorithms",
issuer:"Coursera",
image:"/certs/dsa.png",
link:"/certs/dsa.pdf"
},

{
title:"Machine Learning Foundations",
issuer:"Coursera",
image:"/certs/ml.png",
link:"/certs/ml.pdf"
},

{
title:"Linux System Administration",
issuer:"Udemy",
image:"/certs/linux.png",
link:"/certs/linux.pdf"
}

]

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import "./Certificates.css"

export default function Certificates(){

const ref = useRef(null)
const [active,setActive] = useState(null)

const {scrollYProgress} = useScroll({
target:ref,
offset:["start start","end end"]
})

return(
<section className="cert-section">

<div className="cert-scroll" ref={ref}>

<div className="cert-stage">
<div className="cert-header">

<span className="cert-tag">
CERTIFICATIONS
</span>

<h2 className="cert-title">
Things I've studied deeply.
</h2>

</div>

<div className="cert-grid">

{certificates.map((cert,index)=>{

const y = useTransform(
scrollYProgress,
[0.1*index,0.4+0.1*index],
[120,0]
)

const opacity = useTransform(
scrollYProgress,
[0.1*index,0.4+0.1*index],
[0,1]
)

return(

<motion.div
className="cert-card"
key={index}
style={{y,opacity}}
whileHover={{scale:1.05}}
onClick={()=>setActive(cert)}
>

<img src={cert.image}/>

<div className="cert-info">

<h3>{cert.title}</h3>
<p>{cert.issuer}</p>

</div>

</motion.div>

)

})}

</div>

</div>
</div>

{/* MODAL */}

{active && (

<motion.div
className="cert-modal"
initial={{opacity:0}}
animate={{opacity:1}}
onClick={()=>setActive(null)}
>

<motion.div
className="cert-modal-content"
initial={{scale:0.9}}
animate={{scale:1}}
onClick={(e)=>e.stopPropagation()}
>

<img src={active.image}/>

<h2>{active.title}</h2>

<p>{active.issuer}</p>

<a href={active.link} target="_blank">
View Certificate
</a>

</motion.div>

</motion.div>

)}

</section>

)
}