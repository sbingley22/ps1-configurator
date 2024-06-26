/* eslint-disable react/prop-types */

const Options = ({ setShowOptions, setPreset }) => {
  const buttonClass = "bg-gray-800 border-2 border-solid border-yellow-200 mt-2 mb-2 p-3 min-w-40 rounded-lg"

  const saveClicked = () => {
    setShowOptions(false)
  }

  const screenshotClicked = () => {
    setShowOptions(false)
  }

  const resetClicked = () => {
    setShowOptions(false)
    setPreset(1)
  }

  return (
    <div 
      className="text-yellow-100 m-2 bg-slate-900 border-2 border-solid border-yellow-200 rounded-lg p-4 text-center text-sm flex flex-col stretch-animation" 
      style={{backgroundColor: "rgba(0,0,0,0.35)"}}
    >
      <button
        className={buttonClass}
        onClick={saveClicked}
      >
        SAVE SESSION
      </button>
      <button
        className={buttonClass}
        onClick={screenshotClicked}
      >
        DOWNLOAD IMAGE
      </button>
      <button
        className={buttonClass}
        onClick={()=>resetClicked()}
      >
        RESET DEFAULT
      </button>
    </div>
  )
}

export default Options
