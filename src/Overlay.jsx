import { Scroll } from "@react-three/drei"

export default function Overlay(){
    return (
        <Scroll html>
            <h1 style={{ position: 'absolute', top: '60vh', left: '0.5em', color: "#64CCC5" }}>to</h1>
            <h1 style={{ position: 'absolute', top: '120vh', left: '60vw', color: "#64CCC5" }}>be</h1>
            <h1 style={{ position: 'absolute', top: '198.5vh', left: '0.5vw', fontSize: '40vw', color: "#64CCC5" }}>home</h1>
            <div style={{ position: "absolute",top:"0",left:"0", height: "1000vh", width:"100vw", color: "#f00"}}> </div>
        </Scroll>
    )
}