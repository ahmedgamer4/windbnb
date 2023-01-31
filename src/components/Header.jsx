import { useState, useRef } from "react"
import Menu from "./Menu"
import logo from "./assets/logo.svg"
import { info } from "./Menu"

const showMenu = () => {
  return (
    // <Menu />
    <div>
    </div>
  )
}

const Header = ({ onClick }) => {
  const [blur, setBlur] = useState(0.5)
  
  const menuRef = useRef()

  const toggleVisible = () => menuRef.current.toggle() 

  const makeBlur = () => {
    setBlur(blur === 0.5 ? 1 : 0.5)
    // document.body.style.opacity = blur
  }


  return (
    <header className="w-full flex flex-col gap-8 sm:flex-row justify-between">
      <div>
        <img src={logo} alt="Windbnb_Logo" />
      </div>
      <div className="flex items-center shadow-md rounded-md w-64 self-end" onClick={() => {
        toggleVisible()
        makeBlur()
      }}>

        <input className="w-28 px-2 py-2 outline-none text-xs text-gray-700" value={info.city} />
        <input className="border-x border-gray-300 outline-none w-24 text-xs px-4 py-3 text-gray-700" placeholder="Add guests" type="text" value={info.children + info.adults} />
        <div className="text-center text-red-500 text-sm py-2 px-4 w-10">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <Menu ref={menuRef}/>
    </header>
  )
}

export default Header