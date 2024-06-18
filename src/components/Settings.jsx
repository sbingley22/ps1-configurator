/* eslint-disable react/prop-types */

const Settings = ({ intersectedObject, setIntersectedObject }) => {

  if (intersectedObject == null) return

  const updateColor = (color) => {
    intersectedObject.material.color.r = color[0]
    intersectedObject.material.color.g = color[1]
    intersectedObject.material.color.b = color[2]
  }
  
  return (
    <div 
      className="absolute top-0 left-0 h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-transparent"
    >
      <div 
        className="text-yellow-100 m-16 p-4 border-2 border-solid border-black rounded-md"
        style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
      >
        <div className="border-b-2 border-solid border-black m-2 text-center">
          <h2 className="text-xl m-2">
            Color
          </h2>
          <button onClick={()=>updateColor([1,0,0])}>
            RED
          </button>
        </div>
        
        <div className="border-b-2 border-solid border-black m-2 text-center">
          <h2 className="text-xl m-2">
            Texture
          </h2>
        </div>
        
        <div className="m-2 text-center">
          <button 
            className="text-xl m-2"
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
