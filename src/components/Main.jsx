import { useState } from "react"
import { info } from "./Menu"
import stays from '../../stays.json'

const Card = ({ img, superHost, type, rating, title, beds }) => {
  return (
    <div className="w-96 h-56 ">
      <div className="w-full h-40 object-cover overflow-hidden">
        <img src={img} className="w-full" alt="img" />
      </div>
      <div>
        <div></div>
        <h4></h4>
        <div>
          <i className="fa-solid fa-star text-red-500"></i>
          <p className="text-gray-700 text-sm">{ rating }</p>
        </div>
      </div>
      <h2></h2>
    </div>
  )
}

const Main = () => {
  const allLocations = stays
  const [locations, setLocations] = useState(allLocations)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3">
      { locations.map((location) => <Card img={location.photo} superHost={location.superHost} type={location.type}
          rating={location.rating} title={location.title}  beds={location.beds} />) }
    </div>
  )
}

export default Main