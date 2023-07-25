import React from "react"
import { Environment, ScrollControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Experience from "./Experience.jsx"
import Overlay from "./Overlay.jsx"

export default function App(){

    return(
        <>
            <Canvas
                shadows
                // gl={{  stencil: false, depth: false, antialias: false }}
                camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
                onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}>
                <ambientLight intensity={1} />
                <ScrollControls pages={3} damping={0.5}>
                    <Experience />
                    <Overlay />
                </ScrollControls>
                <Environment preset="city" />
            </Canvas>
        </>
    )
}