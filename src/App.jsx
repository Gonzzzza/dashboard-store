import Sidebar from "./components/shared/sidebar"
import { useState } from "react";
import { RiCloseFill, RiHome6Line,RiMailLine, RiListUnordered, RiArrowDownSLine, RiMenu3Fill } from "react-icons/ri";
import Car from "./components/shared/Car";
import Card from "./components/shared/Card";
import Header from "./components/shared/Header";

function App() {

  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const toggleMenu = () => {
      setShowMenu(!showMenu)
      setShowOrder(false)
  }

  const toggleOrder = () => {
      setShowOrder(!showOrder)
      setShowMenu(false);
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/* Menu movil */}
      <nav className="bg-[#1f1d2b] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex item-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiHome6Line/>
        </button>
        <button className="p-2">
          <RiMailLine/>
        </button>
        <button onClick={toggleOrder} className="p-2">
          <RiListUnordered/>
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseFill/> : <RiMenu3Fill/>}
        </button>
      </nav>
      {/* Home */}
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* header */}
          <Header />          
          {/* Title content */}
          <div className="flex items-center justify-between mb-12">
              <h2 className="text-xl text-gray-300">Choose Dishes</h2>
              <button className="flex items-center gap-4 text-gray-300 bg-[#1f1d2b] py-2 px-4 rounded-lg">
                <RiArrowDownSLine/> Dine in
              </button>
            </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <Card img='platos-1.png' description='Speacy seasoned seafood nodles' price='$2.29' inverntory='20' />
            {/* Card */}
            <Card img='platos-1.png' description='Speacy seasoned seafood nodles' price='$2.29' inverntory='20' />
            {/* Card */}
            <Card img='platos-1.png' description='Speacy seasoned seafood nodles' price='$2.29' inverntory='20' />
            {/* Card */}
            <Card img='platos-1.png' description='Speacy seasoned seafood nodles' price='$2.29' inverntory='20' />
            {/* Card */}
            <Card img='platos-1.png' description='Speacy seasoned seafood nodles' price='$2.29' inverntory='20' />
            {/* Card */}
            <Card img='platos-1.png' description='Speacy seasoned seafood nodles' price='$2.29' inverntory='20' />
            {/* Card */}
            <Card img='platos-1.png' description='Speacy seasoned seafood nodles' price='$2.29' inverntory='20' />
            {/* Card */}
            <Card img='platos-1.png' description='Speacy seasoned seafood nodles' price='$2.29' inverntory='20' />
            {/* Card */}
            <Card img='platos-1.png' description='Speacy seasoned seafood nodles' price='$2.29' inverntory='20' />
            {/* Card */}
            <Card img='platos-1.png' description='Speacy seasoned seafood nodles' price='$2.29' inverntory='20' />
            {/* Card */}
            <Card img='platos-1.png' description='Speacy seasoned seafood nodles' price='$2.29' inverntory='20' />
            {/* Card */}
            <Card img='platos-1.png' description='Speacy seasoned seafood nodles' price='$2.29' inverntory='20' />
          </div>
        </div>
        
      </main>
    </div>
  )
}

export default App
