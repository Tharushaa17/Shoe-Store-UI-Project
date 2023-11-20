import { hamburger } from '../assets/icons/index.js';
import {headerLogo} from '../assets/images';
import { navLinks } from '../constants/index.js'

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className='flex justify-between items-center max-container'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap uppercase'>
                    <span className='text-coral-red'>shoe</span>
                    <span className='text-slate-700'>store</span>
            </h1>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a href={item.label} className='font-montserrat leading-normal text-lg text-slate-gray'>{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt='Humberger' width={25} height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav