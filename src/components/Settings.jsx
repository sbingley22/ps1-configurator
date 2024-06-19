/* eslint-disable react/prop-types */
import * as THREE from "three"
import texCrash from "../assets/crash.jpg"
import texSnake from "../assets/snake.jpg"
import texSyphonfilter from "../assets/syphonfilter.jpg"
import texTombRaider from "../assets/tombraider.jpg"

const Settings = ({ intersectedObject, setIntersectedObject }) => {

  if (intersectedObject == null) return

  const updateColor = (color) => {
    intersectedObject.material.color.r = color[0]
    intersectedObject.material.color.g = color[1]
    intersectedObject.material.color.b = color[2]
    intersectedObject.material.roughness = 0.5

    intersectedObject.material.map = null
    intersectedObject.material.needsUpdate = true
  }

  const updateTexture = (texture) => {
    const loader = new THREE.TextureLoader()
    loader.load(
      texture,
      (loadedTexture) => {
        intersectedObject.material.map = loadedTexture
        intersectedObject.material.map.flipY = false
        intersectedObject.material.needsUpdate = true
      },
      undefined,
      (error) => {
        console.error("An error occurred loading the texture: ", error)
      }
    )
    
    const brightness = 0.3
    intersectedObject.material.color.r = brightness
    intersectedObject.material.color.g = brightness
    intersectedObject.material.color.b = brightness
    intersectedObject.material.roughness = 1
  }

  const colorButton = "w-8 h-8 border-2 border-solid border-black m-1"
  const stickerButton = "min-w-20 border-2 border-solid border-gray-500 p-2 m-1 sm:m-2 bg-gray-950 hover:bg-gray-900 block text-center ml-auto mr-auto"
  
  return (
    <div 
      className="absolute top-0 left-0 h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-transparent"
    >
      <div 
        className="text-yellow-100 m-0 sm:m-16 p-0 sm:p-4 border-2 border-solid border-black rounded-md text-sm sm:text-lg"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="border-b-2 border-solid border-black m-2 text-center ">
          <h2 className="text-xl m-2">
            COLOR
          </h2>
          <div className="grid grid-cols-3 gap-1">
            <button
              className={colorButton + " bg-gray-500"}
              onClick={()=>updateColor([.5,.5,.5])}
            />
            <button
              className={colorButton + " bg-gray-700"}
              onClick={()=>updateColor([.3,.3,.3])}
            />
            <button
              className={colorButton + " bg-gray-950"}
              onClick={()=>updateColor([.05,.05,.05])}
            />
            <button
              className={colorButton + " bg-pink-500"}
              onClick={()=>updateColor([.6,.1,.3])}
            />
            <button
              className={colorButton + " bg-red-600"}
              onClick={()=>updateColor([.5,.0,.0])}
            />
            <button
              className={colorButton + " bg-red-800"}
              onClick={()=>updateColor([.3,0,0])}
            />
            <button
              className={colorButton + " bg-purple-700"}
              onClick={()=>updateColor([.4,0,.4])}
            />
            <button
              className={colorButton + " bg-blue-700"}
              onClick={()=>updateColor([0,0,.5])}
            />
            <button
              className={colorButton + " bg-blue-900"}
              onClick={()=>updateColor([0,0,.2])}
            />
            <button
              className={colorButton + " bg-yellow-600"}
              onClick={()=>updateColor([.5,.25,0])}
            />
            <button
              className={colorButton + " bg-green-600"}
              onClick={()=>updateColor([0,.3,0])}
            />
            <button
              className={colorButton + " bg-green-800"}
              onClick={()=>updateColor([0,.1,0])}
            />
          </div>
        </div>
        
        <div className="border-b-2 border-solid border-black m-2 text-center">
          <h2 className="text-xl m-2">
            STICKER
          </h2>
          <button
            className={stickerButton}
            onClick={()=>updateTexture(texSyphonfilter)}
          >
            SYPHON FILTER
          </button>
          <button
            className={stickerButton}
            onClick={()=>updateTexture(texCrash)}
          >
            CRASH BANDICOOT
          </button>
          <button
            className={stickerButton}
            onClick={()=>updateTexture(texTombRaider)}
          >
            TOMB RAIDER
          </button>
          <button
            className={stickerButton}
            onClick={()=>updateTexture(texSnake)}
          >
            SOLID SNAKE
          </button>
        </div>
        
        <div className="m-2 text-center">
          <button 
            className="text-xl m-2 bg-slate-800 hover:bg-slate-700 p-4 min-w-20 rounded-md border-solid border-2 border-slate-500"
            onClick={()=>setIntersectedObject(null)}
          >
            SET
          </button>
        </div>

      </div>
    </div>
  )
}

export default Settings
