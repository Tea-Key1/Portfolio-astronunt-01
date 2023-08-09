import React from "react"
import { Environment, ScrollControls, Scroll } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Experience from "./Experience.jsx"
import Underlay from "./Underlay.jsx"

function Overlay() {
  return (
    <>
      {/* <div className="Overlay-wapper" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'box-none', width: '100%', height: '100%' }}> */}
        <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>― Ask one —</div>
        <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>date</div>
      {/* </div> */}
    </>
  )
}

export default function App(){

  return (
    <>
      <Canvas
        className="Canvas"
        shadows
        camera={{ fov: 45, near: 1, far: 100, position: [0,0,20] }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
      >
        <ambientLight intensity={1} />
        <ScrollControls pages={4} damping={0.5}>
          <Scroll>
            <Experience />
          </Scroll>
          <Scroll html>
            <Underlay />
          </Scroll>
        </ScrollControls>
        <Environment preset="city" />
      </Canvas>
      <Overlay />
    </>
  )
}
