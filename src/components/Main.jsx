import { useEffect, useRef, useState } from "react"
import stays from '../../stays.json'
import { info } from "./Menu"

const Card = ({ img, superHost, type, rating, title, beds }) => {
  return (
    <div className="w-72 md:w-72 lg:w-80 h-56">
      <div className="w-full h-48 object-cover overflow-hidden rounded-2xl">
        <img src={img} className="w-full" alt="img" />
      </div>
      <div className="flex justify-between mt-2">
        <div>{ superHost ? <div className="rounded-full border border-gray-700 inline p-1 text-xs uppercase" >Super Host</div> : null }</div>
        <h4 className="text-gray-600 text-base">{ `${type} . ${beds} beds` }</h4>
        <div className="inline">
          <i className="fa-solid fa-star text-red-500"></i>
          <p className="text-gray-700 text-sm inline ml-1">{ rating }</p>
        </div>
      </div>
      <h2 className="text-gray-700 font-semibold mt-3">{ title }</h2>
    </div>
  )
}

const Main = () => {
  const allLocations = stays
  const [locations, setLocations] = useState(allLocations)

  useEffect(() => {
    if (info.city.length > 0)
      setLocations(locations.filter((l) => l.city.toLowerCase().includes(info.city)))
  }, [])
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-16 mt-16">
      { locations.map((location) => <Card img={location.photo} superHost={location.superHost} type={location.type}
          rating={location.rating} title={location.title}  beds={location.beds} />) }
    </div>
  )
}

export default Main