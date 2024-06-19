/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei"
import glb from "../assets/ps1.glb?url"
import { useEffect, useRef, useState } from "react"
import { useThree } from "@react-three/fiber"
import * as THREE from "three"

const presets = [
  {

  },
  {
    "Lid": [0.4,0.4,0.4],
    "Base": [0.3,0.3,0.3],
    "BaseL": [0.4,0.4,0.4],
    "BaseR": [0.4,0.4,0.4],
    "ButtonL": [0.3,0.3,0.3],
    "ButtonR": [0.3,0.3,0.3],
    "MemCard": [0.4,0.4,0.4],
    "Grills": [0.4,0.4,0.4],
  },
  {
    "Lid": [0.4,0,0],
    "Base": [.01,.01,.01],
    "BaseL": [0.05,0.05,0.05],
    "BaseR": [0.05,0.05,0.05],
    "ButtonL": [0.4,0,0],
    "ButtonR": [0.4,0,0],
    "MemCard": [.01,.01,.01],
    "Grills": [.01,.01,.01],
  },
  {
    "Lid": [0.4,0,0.2],
    "Base": [.5,0,0],
    "BaseL": [.5,0,0],
    "BaseR": [.5,0,0],
    "ButtonL": [0.4,0,0.2],
    "ButtonR": [0.4,0,0.2],
    "MemCard": [0.4,0,0.2],
    "Grills": [0.4,0,0.2],
  }
]

const Ps1 = ({ intersectedObject, setIntersectedObject, preset, setPreset }) => {
  const { scene, nodes, materials } = useGLTF(glb)
  const { camera, gl } = useThree()
  const [raycaster] = useState(() => new THREE.Raycaster())
  const mouse = useRef(new THREE.Vector2())

  // Initial setup
  useEffect(()=>{
    console.log(nodes)
  },[nodes])

  // Presets
  useEffect(()=>{
    if (preset === null) return
    if (preset === 0) return

    const selection = presets[preset]

    Object.keys(selection).forEach((key) => {
      if (materials[key]) {
        const color = selection[key];
        materials[key].color.setRGB(color[0], color[1], color[2])
        materials[key].roughness = 0.5
    
        materials[key].map = null
        materials[key].needsUpdate = true
      }
    })

    setPreset(null)

  }, [preset, materials])

  const flashSelection = (material) => {
    material.emissive.r = 1
    material.emissive.g = 1
    material.emissive.b = 1

    setTimeout(()=>{
      material.emissive.r = 0.5
      material.emissive.g = 0.5
      material.emissive.b = 0.5
    }, 250)

    setTimeout(()=>{
      material.emissive.r = 0
      material.emissive.g = 0
      material.emissive.b = 0
    }, 300)
  }

  // Raycasting Click
  const handleClick = (event) => {
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1

    raycaster.setFromCamera(mouse.current, camera)

    const intersects = raycaster.intersectObjects(scene.children, true)

    if (intersects.length > 0) {
      setIntersectedObject(intersects[0].object)
      console.log("Intersected object:", intersects[0].object)
      console.log("object:", intersects[0].object.material.name)
      flashSelection(intersects[0].object.material)
    } else {
      setIntersectedObject(null)
    }
  }

  useEffect(() => {
    gl.domElement.addEventListener('click', handleClick)

    return () => {
      gl.domElement.removeEventListener('click', handleClick)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gl, camera, raycaster, scene])

  return (
    <group position-z={0.0}>
      <primitive object={scene} dispose={null} />
    </group>
  )
}

export default Ps1

useGLTF.preload(glb)