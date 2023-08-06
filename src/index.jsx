import React from "react"
import "./style.css"
import { createRoot } from "react-dom/client"
import { Loader } from '@react-three/drei'
import App from "./App"

function Overlay() {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
            <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>good —</div>
            <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>08/01/2023</div>
        </div>
    )
}

createRoot(document.querySelector("#root")).render(<><App /><Overlay /><Loader /></>)