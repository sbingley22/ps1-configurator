import { useState } from "react"
import Hud from "./Hud"
import Model from "./Model"
import Settings from "./Settings"

const Configurator = () => {
  const [intersectedObject, setIntersectedObject] = useState(null)
  
  return (
    <div className="h-screen">
      <Model 
        intersectedObject={intersectedObject}
        setIntersectedObject={setIntersectedObject}
      />
      <Hud    
      />
      <Settings
        intersectedObject={intersectedObject}
        setIntersectedObject={setIntersectedObject}   
      />
    </div>
  )
}

export default Configurator
