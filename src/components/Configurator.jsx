import { useState } from "react"
import Hud from "./Hud"
import Model from "./Model"
import Settings from "./Settings"

const Configurator = () => {
  const [intersectedObject, setIntersectedObject] = useState(null)
  const [preset, setPreset] = useState(null)
  
  return (
    <div className="h-screen">
      <Model 
        intersectedObject={intersectedObject}
        setIntersectedObject={setIntersectedObject}
        preset={preset}
        setPreset={setPreset}
      />
      <Hud
        setPreset={setPreset}
      />
      <Settings
        intersectedObject={intersectedObject}
        setIntersectedObject={setIntersectedObject}   
      />
    </div>
  )
}

export default Configurator
