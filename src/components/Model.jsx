/* eslint-disable react/prop-types */
import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Ps1 from "./Ps1"

const Model = ({ intersectedObject, setIntersectedObject, preset, setPreset }) => {
  return (
    <Canvas 
      className="h-full 
      bg-slate-600"
      style={{background: "radial-gradient(#767676, #212121)"}}
      shadows
      camera={{ position: [0,1,1] }}
    >
      <Suspense>
        <Environment preset="city" backgroundRotation={[0,Math.PI/2,0]} environmentRotation={[0,Math.PI/2,0]} />
        <OrbitControls 
          minDistance={.35}
          maxDistance={.55}
        />

        <Ps1 
        intersectedObject={intersectedObject}
        setIntersectedObject={setIntersectedObject}
        preset={preset}
        setPreset={setPreset}
      />

      </Suspense>
    </Canvas>
  )
}

export default Model
