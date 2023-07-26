function Card(props) {
    const { img, description, price, inventory } = props
    return ( 
        <div className="bg-[#1f1d2b] text-gray-300 text-center p-4 gap-2 rounded-xl flex flex-col items-center">
              <img src={img} alt="" className="w-44 h-44 object-cover -mt-24 shadow-2xl rounded-full"/>
              <p className="text-xl">{description}</p>
              <span className="text-gray-400">{price}</span>
              <p className="text-gray-600">{inventory} Bowls available</p>
            </div>
     );
}

export default Card;