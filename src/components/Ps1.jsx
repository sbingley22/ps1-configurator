/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei"
import glb from "../assets/ps1.glb?url"
import { useEffect, useRef, useState } from "react"
import { useThree } from "@react-three/fiber"
import * as THREE from "three"

const Ps1 = ({ intersectedObject, setIntersectedObject }) => {
  const { scene, nodes } = useGLTF(glb)
  const { camera, gl } = useThree()
  const [raycaster] = useState(() => new THREE.Raycaster())
  const mouse = useRef(new THREE.Vector2())

  // Initial setup
  useEffect(()=>{
    console.log(nodes)
  },[nodes])

  // Raycasting Click
  const handleClick = (event) => {
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1

    raycaster.setFromCamera(mouse.current, camera)

    const intersects = raycaster.intersectObjects(scene.children, true)

    if (intersects.length > 0) {
      setIntersectedObject(intersects[0].object)
      //console.log("Intersected object:", intersects[0].object)
      console.log("object:", intersects[0].object.material.name)
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