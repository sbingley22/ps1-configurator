import { useState } from "react"
import BuyScreen from "./BuyScreen"
import Options from "./Options"

const Hud = () => {
  const [showBuyScreen, setShowBuyScreen] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

  return (
    <>
      <img src="./psLogo.png" className="absolute top-0 left-0 w-20 m-8" />
      <div className="absolute top-0 right-0 m-10 text-yellow-100 mr-12 font-bold text-right">
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
        {showOptions && <Options setShowOptions={setShowOptions} />}
      </div>

      {showBuyScreen && <BuyScreen setShowBuyScreen={setShowBuyScreen} />}
    </>
  )
}

export default Hud
