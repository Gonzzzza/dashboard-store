import {  RiCloseFill, RiDeleteBin5Line } from "react-icons/ri";


function Card(props) {
    const {showOrder, setShowOrder} = props
    return ( 
        <div className={`bg-[#1f1d2b] lg:col-span-2 fixed lg:right-0 lg:w-96 lg:min-h-screen max-h-screen top-0 w-full h-full ${showOrder ? "right-0" : "-right-full"} transition-all z-50`}>
          {/* Orders */}
          <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
            <RiCloseFill onClick={ () => setShowOrder(false) } className="lg:hidden absolute left-4 top-4 box-content bg-[#262837] p-3 rounded-full text-gray-300 text-xl"/>
            <h1 className="text-2xl my-4">Orders #161554</h1>
            {/* Pills */}
            <div className="flex items-center gap-3 flex-wrap mb-8">
              <button className="bg-[#ec7e6a] text-white py-2 px-4 rounded-xl">Dine in</button>
              <button className="text-[#ec7e6a] border border-gray-600 py-2 px-4 rounded-xl">To Go</button>
              <button className="text-[#ec7e6a] border border-gray-600 py-2 px-4 rounded-xl">Delivery</button>
            </div>
            {/* Card */}
            <div>
              <div className="grid grid-cols-6 mb-4 p-4">
                <h5 className="col-span-4">Item</h5>
                <h5>Qty</h5>
                <h5>Price</h5>
              </div>
              {/* Products */}
              <div className="h-[410px] md:h-[700px] max-lg:overflow-scroll">
                {/* Product */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/* Product Description */}
                    <div className="flex items-center gap-2 col-span-4">
                      <img src="platos-1.png" alt="" className="w-12 h-12 object-cover"/>
                      <div>
                        <h5 className="text-md">Spaicy seasoned...</h5>
                        <p className="text-sm text-gray-500">$2.29</p>
                      </div>
                    </div>
                    {/* Qty */}
                    <div className="">
                      <span className=" bg-[#1f1d2b] py-2 px-3 rounded-lg">2</span>
                    </div>
                    {/* Price */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* Notes */}
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input type="text" name="" className="text-gray-500 outline-none bg-[#1f1d2b] py-2 px-6 rounded-md" placeholder="Order note..." />
                    </form>
                    <div className="col-span-1 text-end mr-4">
                      <button className="border outline-none border-red-500 p-2 rounded-xl">
                        <RiDeleteBin5Line className="text-red-500 text-xl"/>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/* Product Description */}
                    <div className="flex items-center gap-2 col-span-4">
                      <img src="platos-1.png" alt="" className="w-12 h-12 object-cover"/>
                      <div>
                        <h5 className="text-md">Spaicy seasoned...</h5>
                        <p className="text-sm text-gray-500">$2.29</p>
                      </div>
                    </div>
                    {/* Qty */}
                    <div className="">
                      <span className=" bg-[#1f1d2b] py-2 px-3 rounded-lg">2</span>
                    </div>
                    {/* Price */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* Notes */}
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input type="text" name="" className="text-gray-500 outline-none bg-[#1f1d2b] py-2 px-6 rounded-md" placeholder="Order note..." />
                    </form>
                    <div className="col-span-1 text-end mr-4">
                      <button className="border outline-none border-red-500 p-2 rounded-xl">
                        <RiDeleteBin5Line className="text-red-500 text-xl"/>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/* Product Description */}
                    <div className="flex items-center gap-2 col-span-4">
                      <img src="platos-1.png" alt="" className="w-12 h-12 object-cover"/>
                      <div>
                        <h5 className="text-md">Spaicy seasoned...</h5>
                        <p className="text-sm text-gray-500">$2.29</p>
                      </div>
                    </div>
                    {/* Qty */}
                    <div className="">
                      <span className=" bg-[#1f1d2b] py-2 px-3 rounded-lg">2</span>
                    </div>
                    {/* Price */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* Notes */}
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input type="text" name="" className="text-gray-500 outline-none bg-[#1f1d2b] py-2 px-6 rounded-md" placeholder="Order note..." />
                    </form>
                    <div className="col-span-1 text-end mr-4">
                      <button className="border outline-none border-red-500 p-2 rounded-xl">
                        <RiDeleteBin5Line className="text-red-500 text-xl"/>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product */}
                {/* <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    //  Product Description 
                    <div className="flex items-center gap-2 col-span-4">
                      <img src="platos-1.png" alt="" className="w-12 h-12 object-cover"/>
                      <div>
                        <h5 className="text-md">Spaicy seasoned...</h5>
                        <p className="text-sm text-gray-500">$2.29</p>
                      </div>
                    </div>
                    //  Qty 
                    <div className="">
                      <span className=" bg-[#1f1d2b] py-2 px-3 rounded-lg">2</span>
                    </div>
                    {/* Price 
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* Notes 
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input type="text" name="" className="text-gray-500 outline-none bg-[#1f1d2b] py-2 px-6 rounded-md" placeholder="Order note..." />
                    </form>
                    <div className="col-span-1 text-end mr-4">
                      <button className="border outline-none border-red-500 p-2 rounded-xl">
                        <RiDeleteBin5Line className="text-red-500 text-xl"/>
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* Submit payment */}
            <div className="bg-[#262837] p-4 w-full absolute bottom-0 left-0">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Discount</span>
                <span>$0</span>
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400">Sub total</span>
                <span>$201.03</span>
              </div>
              <div>
                <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">Cotinue to payment</button>
              </div>
            </div>
          </div>
        </div>
     );
}

export default Card;