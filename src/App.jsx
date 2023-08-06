import React, { useRef, useEffect } from "react"
import { Environment, ScrollControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Experience from "./Experience.jsx"
import MainPage from "./MainPage.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App(){
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  )
}

const Home = () => {
  const cameraRef = useRef();

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt([0, 0, 0]);
    }
  }, []);
  
  return (
    // <Canvas
    //   shadows
    //   camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }} // カメラに ref を設定
    // >
    <Canvas
      shadows
      camera={{ fov: 45, near: 1, far: 100, position: [0,0,20] }}
      onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
    >
      <perspectiveCamera ref={cameraRef} />
      <ambientLight intensity={1} />
      <ScrollControls pages={4} damping={0.5}>
        <Experience />
        <MainPage />
      </ScrollControls>
      <Environment preset="city" />
    </Canvas>
  )
}