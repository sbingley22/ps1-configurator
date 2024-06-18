/* eslint-disable react/prop-types */

const BuyScreen = ({ setShowBuyScreen }) => {
  return (
    <div 
      className="h-screen w-screen absolute top-0 left-0 flex justify-center items-center"
      style={{backgroundColor: "rgba(22,22,22,0.75)"}}
    >
      <div 
        className="bg-slate-900 text-yellow-200 p-10 rounded-lg flex flex-col justify-around items-center border-2 border-solid border-yellow-200 min-h-72 min-w-96"
      >
        <p className=" text-2xl mb-4">Customised Playstation:</p>
        <p className=" text-2xl mb-4">£100</p>
        <button
          className="bg-green-800 hover:bg-green-600 border-2 border-solid border-green-400 m-4 p-4 rounded-md font-bold text-white min-w-60"
        >
          BUY
        </button>
        <button
          className="bg-red-800 hover:bg-red-600 border-2 border-solid border-red-400 m-4 p-4 rounded-md font-bold text-white min-w-60"
          onClick={()=>setShowBuyScreen(false)}
        >
          CANCEL
        </button>
      </div>
    </div>
  )
}

export default BuyScreen
