
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import "./Certificates.css"
import chatgptEss from "../Certificates/chatgpt-essentials.png"
import cssJS from "../Certificates/css-js-complete.png"
import flutterDart from "../Certificates/flutter-dart-complete.png"
import genAi from "../Certificates/generative-ai-tools.png"
import hackerRank from "../Certificates/hackerrank-problem-solving.png"
import noCode from "../Certificates/no-code-ai.png"
import webFrame from "../Certificates/web-frameworks.png"
const certificates = [

{
title:"Fundamental Course in Web Frameworks",
issuer:"Udemy",
image:webFrame
},

{
title:"Flutter & Dart — The Complete Guide",
issuer:"Udemy",
image:flutterDart
},

{
title:"Build Generative AI Apps & Solutions (No-Code Tools)",
issuer:"Udemy",
image:noCode
},

{
title:"Problem Solving (Basic)",
issuer:"HackerRank",
image:hackerRank
},

{
title:"ChatGPT Made Easy: AI Essentials for Beginners",
issuer:"Udemy",
image:chatgptEss
},

{
title:"CSS & JavaScript Complete Course for Beginners",
issuer:"Udemy",
image:cssJS
},

{
title:"Master Generative AI & AI Tools (ChatGPT and More)",
issuer:"Udemy",
image:genAi
}

]


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

{/* <a href={active.link} target="_blank">
View Certificate
</a> */}

</motion.div>

</motion.div>

)}

</section>

)
}