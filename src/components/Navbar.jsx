import {useState} from 'react'
import { close, logo, menu  } from '../assets';
import { navLinks } from '../constants'


const Navbar = () => {

    const [toggle, setToggle] = useState(false)

  return (
   <nav className='w-full flex py-6 justify-between items-center'>
   
  <a href="/">
  <img src={logo} alt="hoobank"
    className='w-[134px] h-[42px]'/>
  </a>   

    
    <div className='list-none sm:flex hidden !cursor-pointer justify-end items-center flex-1 '>
    {navLinks.map((nav, index) => (
      <p
        key={nav.id}
        className={`font-poppins !cursor-pointer font-normal text-[16px]
            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-14' } text-white `}
      >
          <a href={`#${nav.id}`}>
            {nav.title}
          </a>
      </p>
    ))}
    </div>

      <div className='list-none sm:hidden flex flex-1 cursor-pointer justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu"
          className='w-[28px] h-[28px]
          object-contain' 
          onClick={() => setToggle((prev) => !prev)}
          />

          <div className={`${toggle ? 'flex' : 'hidden'} text-white p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] rounded-xl sidebar `}>
          
          <ul className=''>
            {navLinks.map((nav, index) => (
              <li key = {nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px]
                  text-white mb-4`}>

                  <a href={`#${nav.id}`}>
                    {nav.title}
                    </a>
              </li>
            ))}
            
          </ul>
          </div>
      </div>


   </nav>
  )   
}

export default Navbar;