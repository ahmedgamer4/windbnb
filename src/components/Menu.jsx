import { useState, forwardRef, useImperativeHandle } from "react"
import stays from '../../stays.json'


let info = {} 

const Location = ({ location, setLocation}) => {
  return (
    <div className="text-sm text-gray-700 hover:text-red-500 my-3 cursor-pointer" onClick={() => setLocation(location.city)}>
      <i className="fa-solid fa-location-dot mr-2"></i>
      { location.city }, { location.country }
    </div>
  )
}

const Menu = forwardRef((props, refs) => {
  const allLocations = stays
  const [locations, setLocations] = useState(allLocations)
  const [location, setLocation] = useState('')
  const [adults, setAdults] = useState(0)
  const [children, setChildredn] = useState(0)
  const [visible, setVisible] = useState(false)

  const [menuState, setMenuState] = useState(false)

  const showWhenVisible = {display: visible ? '' : 'none'}
  const showWhenNotVisible = {display: visible ? 'none' : ''}

  const toggleMenu = {transform: menuState ? 'translateY(0%)' : 'translateY(-200%)'}

  const handleLocationChange = (e) => {
    e.preventDefault()
    setLocation(e.target.value)
    console.log(location)
    setLocations(allLocations.filter((l) => l.city.toLowerCase().includes(location.toLowerCase())))
  }

  const toggle = () => {
    setMenuState(!menuState)
  }

  const search = () => {
    info = {
      city: location, 
      adults: adults,
      children: children,
    }

    toggle()
  }

  useImperativeHandle(refs, () => {
    return {
      toggle
    }
  })
  
  return (
    <div className="bg-white w-screen absolute transition-transform z-20" style={toggleMenu}>
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col rounded-md sm:flex-row w-full shadow-sm">
          <div className="sm:w-1/3">
            <label htmlFor="location" className="uppercase ml-6 mt-1 text-[8px] font-bold text-gray-800 absolute">location</label>
            <input type="text" className="text-xs px-6 pt-3 pb-2 w-full mt-1 rounded-l-md border-b sm:border-r border-r-gray-200"
             name="location" placeholder="Add location" value={location}
             onFocus={() => setVisible(true)} onChange={handleLocationChange}/>
          </div>
          <div className="sm:w-1/3">
            <label htmlFor="location" className="uppercase ml-6 mt-1 text-[8px] font-bold text-gray-800 absolute">guests</label>
            <input type="text" className="text-xs px-6 pt-3 pb-2 text-gray-500 w-full mt-1 rounded-l-md sm:border-r border-r-gray-200"
             name="location" placeholder="Add guests" value={`${adults} adults, ${children} children`}
             onClick={() => setVisible(false)} readOnly />
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <button className="text-xs hidden sm:block  text-white bg-red-500 rounded-md px-4 py-2 mx-auto" onClick={search}>
              <i className="fa-solid fa-magnifying-glass mr-1"></i>
              search
            </button>
          </div>
        </div>

        <div className="flex w-2/3">
          <div className="basis-1/2">
            <div style={showWhenVisible}>
              {locations.map((location) => <Location location={location} setLocation={setLocation} />)}
            </div>
          </div>
          
          <div className="flex-grow">
            <div style={showWhenNotVisible}>
              <div className="text-sm mt-6 mx-6">
                <h4 className="font-bold">Adults</h4>
                <p className="text-gray-400">Ages 13 or above</p>
                <div className="flex items-center">
                  <button className="border-2 text-gray-600 w-6 border-gray-500 font-bold rounded-md" onClick={() => adults > 0 ? setAdults(adults - 1) : adults}>-</button>
                  <input type="text" className="w-9 pl-3" readOnly value={adults}/>
                  <button className="border-2 text-gray-600 w-6 border-gray-500 font-bold rounded-md" onClick={() => setAdults(adults + 1)}>+</button>
                </div>
              </div>

              <div className="text-sm mt-6 mx-6">
                <h4 className="font-bold">Children</h4>
                <p className="text-gray-400">Ages 2-12</p>
                <div className="flex items-center">
                  <button className="border-2 text-gray-600 w-6 border-gray-500 font-bold rounded-md" onClick={() => children > 0 ? setChildredn(children - 1) : children}>-</button>
                  <input type="text" className="w-9 pl-3" readOnly value={children}/>
                  <button className="border-2 text-gray-600 w-6 border-gray-500 font-bold rounded-md" onClick={() => setChildredn(children + 1)}>+</button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <button className="text-xs sm:hidden text-white bg-red-500 rounded-md px-4 py-2 mx-auto" onClick={search}>
          <i className="fa-solid fa-magnifying-glass mr-1"></i>
          search
        </button>
      </div>
    </div>
  ) 
})

export default Menu 
export { info }