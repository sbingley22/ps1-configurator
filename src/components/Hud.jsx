import { useState } from "react"
import BuyScreen from "./BuyScreen"
import Options from "./Options"
import Presets from "./Presets"

const Hud = ({ setPreset }) => {
  const [showBuyScreen, setShowBuyScreen] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const [showPresets, setShowPresets] = useState(false)

  return (
    <>
      <img src="./psLogo.png" className="absolute top-0 left-0 w-16 sm:w-20 m-2 sm:m-8" />

      <div className="absolute top-0 right-0 m-2 sm:m-10 text-yellow-100 mr-2 sm:mr-12 font-bold text-right">
        <button 
          className="bg-slate-800 hover:bg-slate-500 border-2 border-yellow-100 border-solid m-2 p-2 rounded-md"
          onClick={()=>setShowBuyScreen(true)}
        >
          BUY NOW
        </button>
        <button 
          className="bg-slate-800 hover:bg-slate-500 border-2 border-yellow-100 border-solid m-2 p-2 rounded-md text-center"
          onClick={()=>setShowOptions(!showOptions)}
        >
          OPTIONS
        </button>
        {showOptions && <Options setShowOptions={setShowOptions} setPreset={setPreset} />}
      </div>

      <div className="absolute bottom-0 right-0 m-2 sm:m-10 text-yellow-100 mr-2 sm:mr-12 font-bold text-right">
        {showPresets && <Presets setShowPresets={setShowPresets} setPreset={setPreset} />}
        <button 
          className="bg-slate-800 hover:bg-slate-500 border-2 border-yellow-100 border-solid m-2 p-2 rounded-md text-center"
          onClick={()=>setShowPresets(!showPresets)}
        >
          PRESETS
        </button>
      </div>

      {showBuyScreen && <BuyScreen setShowBuyScreen={setShowBuyScreen} />}
    </>
  )
}

export default Hud
