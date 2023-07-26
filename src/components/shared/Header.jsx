import { RiSearch2Line } from "react-icons/ri";


function Header(props) {
    return ( 
        <header>
            {/* Title and Search */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
                <p className="text-gray-500"> 20 julio 2023</p>
              </div>
              <form action="">
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-2 text-gray-300 top-1/2 -translate-y-1/2"/>
                  <input type="text" className="bg-[#1f1d2b] w-full py-2 pl-8 pr-4 rounded-lg outline-none text-gray-300" placeholder="Search"/>
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b border-gray-500 mb-6">
              <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0
              before:rounded-full before:-bottom-[1px] text-[#ec7c6a]">Hot Dishes</a>
              <a href="#" className="py-2 pr-4">Cold Dishes</a>
              <a href="#" className="py-2 pr-4">Soup</a>
              <a href="#" className="py-2 ">Grill</a>
            </nav>
          </header>
     );
}

export default Header;