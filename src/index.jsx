import React from "react"
import "./style.css"
import { createRoot } from "react-dom/client"
import { Loader } from '@react-three/drei'
import App from "./App"


createRoot(document.querySelector("#root")).render(<><App /><Loader /></>)