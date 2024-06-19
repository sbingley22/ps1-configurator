/* eslint-disable react/prop-types */

const Presets = ({ setPreset, setShowPresets }) => {
  const buttonClass = "bg-gray-800 border-2 border-solid border-yellow-200 mt-2 mb-2 p-3 min-w-40 rounded-lg"

  const presetSelected = (p) => {
    setPreset(p)
    setShowPresets(false)
  }
  
  return (
    <div 
      className="text-yellow-100 m-2 bg-slate-900 border-2 border-solid border-yellow-200 rounded-lg p-4 text-center text-sm flex flex-col stretch-animation" 
      style={{backgroundColor: "rgba(0,0,0,0.35)"}}
    >
      <button
        className={buttonClass}
        onClick={()=>presetSelected(1)}
      >
        CLASSIC
      </button>
      <button
        className={buttonClass}
        onClick={()=>presetSelected(2)}
      >
        TERMINATOR
      </button>
      <button
        className={buttonClass}
        onClick={()=>presetSelected(3)}
      >
        PRETTY
      </button>
    </div>
  )
}

export default Presets
