import { useGLTF,Text } from "@react-three/drei";
import { BallCollider, Physics, RigidBody, CylinderCollider } from "@react-three/rapier"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"

function Origin(){
  return (
    <>
      <RigidBody position={[0,0,0]} type="kinematicPosition" scale={0.1}>
        <mesh>
          <sphereGeometry args={[1,8,8]} />
          <meshNormalMaterial transparent opacity={0} />
        </mesh>
      </RigidBody>
    </>
  )
}

function Models({ vec = new THREE.Vector3(), r = THREE.MathUtils.randFloatSpread }) {
  const scale= [0.75, 0.75, 1, 1, 1.25][Math.floor(Math.random() * 5)]
  const api = useRef(null); // 初期値をnullに設定
  const nodes = useGLTF("/models/astronunt_03.glb")
  useFrame((state, delta) => {
    if (api.current) { // api.currentがnullでない場合のみ処理を実行
      delta = Math.min(0.01, delta)
      api.current.applyImpulse(
        vec
          .copy(api.current.translation())
          .normalize()
          .multiply({ x: -50 * delta * scale, y: -200 * delta * scale, z: -50 * delta * scale }),
      )
    }
  })
  
  return (
    <RigidBody mass={0.1} linearDamping={3} angularDamping={1} friction={0} position={[r(20), r(20) - 25, r(20) - 10]} ref={api} colliders={false} dispose={null} restitution={0}>
      <BallCollider args={[scale]} />
      <CylinderCollider rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 1.2 * scale]} args={[0.15 * scale, 0.275 * scale]} />
      <group>
        <primitive object={nodes.scene} scale={[0.23,0.23,0.23]} />
      </group>
    </RigidBody>
  )
}

function Pointer({ vec = new THREE.Vector3() }) {
    const ref = useRef()
    useFrame(({ mouse, viewport }) => {
      vec.lerp({ x: (mouse.x * viewport.width) / 2, y: (mouse.y * viewport.height) / 2, z: 0 }, 0.2)
      ref.current?.setNextKinematicTranslation(vec)
    })
    return (
      <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
        <BallCollider args={[2]} />
      </RigidBody>
    )
}

export default function Experience(){
  return (
    <>
      <Physics gravity={[0,0,0]}>
        <Origin />
        <Pointer />
        <Models />
      </Physics>

      <Text
        scale={3}
        position={[ 0, 3, -15]}
      >
        First step is 
        <meshBasicMaterial color={"#123456"} toneMapped={ false }/>
      </Text>
      <Text
        scale={3}
        position={[ 0, 0, -15]}
      >
        difficult to start.
        <meshBasicMaterial color={"#123456"} toneMapped={ false }/>
      </Text>
    </>
  )
}