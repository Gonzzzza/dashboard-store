import React from "react";
import { RiHome6Line, RiScanLine, RiPieChartLine, RiMailLine, RiNotification2Line, RiSettings4Line, RiLogoutBoxLine } from "react-icons/ri";

function Sidebar(props) {
    const {showMenu} = props;
    
    return (
        <div className={`bg-[#1f1d2b] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-4 rounded-tr-xl rounded-br-xl z-50 ${showMenu ? 'left-0' : '-left-full'} transition-all`}>
            <div>
                <ul className="pl-4">
                    <li>
                        <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-4">
                            Logo
                        </h1>
                    </li>
                    <li className="bg-[#262837] rounded-tl-xl rounded-bl-xl p-4"> 
                        <a href="#" className="bg-[#e67c6a] p-4 flex justify-center rounded-xl text-white">
                            <RiHome6Line className="text-xl"/>
                        </a>
                    </li>
                    <li className=" hover:bg-[#262837] rounded-tl-xl rounded-bl-xl p-4 group transition-colors"> 
                        <a href="#" className=" group-hover:bg-[#e67c6a] p-4 flex justify-center rounded-xl text-white transition-colors">
                            <RiScanLine className="text-[#e67c6a] text-xl group-hover:text-white"/>
                        </a>
                    </li>
                    <li className=" hover:bg-[#262837] rounded-tl-xl rounded-bl-xl p-4 group transition-colors"> 
                        <a href="#" className=" group-hover:bg-[#e67c6a] p-4 flex justify-center rounded-xl text-white transition-colors">
                            <RiPieChartLine className="text-[#e67c6a] text-xl group-hover:text-white"/>
                        </a>
                    </li>
                    <li className=" hover:bg-[#262837] rounded-tl-xl rounded-bl-xl p-4 group transition-colors"> 
                        <a href="#" className=" group-hover:bg-[#e67c6a] p-4 flex justify-center rounded-xl text-white transition-colors">
                            <RiMailLine className="text-[#e67c6a] text-xl group-hover:text-white"/>
                        </a>
                    </li>
                    <li className=" hover:bg-[#262837] rounded-tl-xl rounded-bl-xl p-4 group transition-colors"> 
                        <a href="#" className=" group-hover:bg-[#e67c6a] p-4 flex justify-center rounded-xl text-white transition-colors">
                            <RiNotification2Line className="text-[#e67c6a] text-xl group-hover:text-white"/>
                        </a>
                    </li>
                    <li className=" hover:bg-[#262837] rounded-tl-xl rounded-bl-xl p-4 group transition-colors"> 
                        <a href="#" className=" group-hover:bg-[#e67c6a] p-4 flex justify-center rounded-xl text-white transition-colors">
                            <RiSettings4Line className="text-[#e67c6a] text-xl group-hover:text-white"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="pl-4">
                <li className=" hover:bg-[#262837] rounded-tl-xl rounded-bl-xl p-4 group transition-colors"> 
                        <a href="#" className=" group-hover:bg-[#e67c6a] p-4 flex justify-center rounded-xl text-white transition-colors">
                            <RiLogoutBoxLine className="text-[#e67c6a] text-xl group-hover:text-white"/>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Sidebar;