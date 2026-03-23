import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import "./Loader.css"

export default function Loader({ onFinish }) {

  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800)
    const t2 = setTimeout(() => setPhase(2), 2000)
    const t3 = setTimeout(() => setPhase(3), 3200)
    const t4 = setTimeout(() => onFinish(), 4200)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [])

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      {/* BACKGROUND NOISE */}
      <div className="loader-noise" />

      {/* TERMINAL BOX */}
      <motion.div
        className="loader-terminal"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >

        <div className="loader-header">
          <span className="dot red"/>
          <span className="dot yellow"/>
          <span className="dot green"/>
          <span className="loader-title">system.boot</span>
        </div>

        <div className="loader-body">

          {/* PHASE 1 */}
          {phase >= 0 && (
            <p>Initializing system...</p>
          )}

          {/* PHASE 2 */}
          {phase >= 1 && (
            <>
              <p>Loading modules...</p>
              <p>✓ React environment ready</p>
              <p>✓ Framer Motion initialized</p>
            </>
          )}

          {/* PHASE 3 */}
          {phase >= 2 && (
            <>
              <p>Rendering interface...</p>

              <motion.pre
                className="loader-ascii"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
{`
   █████╗ ██╗  ██╗███████╗██╗  ██╗ █████╗ ████████╗
  ██╔══██╗██║ ██╔╝██╔════╝██║  ██║██╔══██╗╚══██╔══╝
  ███████║█████╔╝ ███████╗███████║███████║   ██║   
  ██╔══██║██╔═██╗ ╚════██║██╔══██║██╔══██║   ██║   
  ██║  ██║██║  ██╗███████║██║  ██║██║  ██║   ██║   
`}
              </motion.pre>
            </>
          )}

          {/* FINAL */}
          {phase >= 3 && (
            <motion.p
              className="loader-done"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Launching experience...
            </motion.p>
          )}

        </div>
      </motion.div>

      {/* FLASH EFFECT */}
      <motion.div
        className="loader-flash"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 3 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

    </motion.div>
  )
}