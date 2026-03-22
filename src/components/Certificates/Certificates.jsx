import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import "./Certificates.css"

import chatgptEss from "../Certificates/chatgpt-essentials.png"
import cssJS from "../Certificates/css-js-complete.png"
import flutterDart from "../Certificates/flutter-dart-complete.png"
import genAi from "../Certificates/generative-ai-tools.png"

const certificates = [
  {
    title: "Flutter & Dart — The Complete Guide",
    issuer: "Udemy",
    image: flutterDart
  },
  {
    title: "Build Generative AI Apps (No-Code)",
    issuer: "Udemy",
    image: chatgptEss
  },
  {
    title: "CSS & JavaScript Complete Course",
    issuer: "Udemy",
    image: cssJS
  },
  {
    title: "Master Generative AI Tools",
    issuer: "Udemy",
    image: genAi
  }
]

export default function Certificates() {
  const ref = useRef(null)
  const [active, setActive] = useState(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  })

  return (
    <section className="cert-section" ref={ref}>
      
      <div className="cert-stage">

        <div className="cert-header">
          <span className="cert-tag">CERTIFICATIONS</span>
          <h2 className="cert-title">
            Things I've studied deeply.
          </h2>
        </div>

        <div className="cert-stack">

          {certificates.map((cert, index) => {

            // FINAL POSITIONS (spread)
            const positions = [
            { x: -540, y: 0 },
            { x: -180, y: 0 },
            { x: 180, y: 0 },
            { x: 540, y: 0 }
            ]

            // INITIAL STACK (center)
            const startX = 0
            const startY = index * 8

            const x = useTransform(
              scrollYProgress,
              [0, 0.5],
              [startX, positions[index].x]
            )

            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [startY, positions[index].y]
            )

            const rotate = useTransform(
              scrollYProgress,
              [0, 1],
              [-6 + index * 4, 0]
            )

            const scale = useTransform(
              scrollYProgress,
              [0, 1],
              [0.9, 1]
            )

            return (
              <motion.div
                key={index}
                className="cert-card"
                style={{ x, y, rotate, scale, zIndex: 10 - index }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActive(cert)}
              >
                <img src={cert.image} alt="" />
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                </div>
              </motion.div>
            )
          })}

        </div>
      </div>

      {/* MODAL */}
      {active && (
        <motion.div
          className="cert-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setActive(null)}
        >
          <motion.div
            className="cert-modal-content"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={active.image} alt="" />
            <h2>{active.title}</h2>
            <p>{active.issuer}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}