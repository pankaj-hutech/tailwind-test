import React , {useState} from "react";
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link , } from 'react-scroll'


const Navbar = () => {

    const [showNav, setShowNav] = useState(false);
    const menuHandler = () => setShowNav((showNav) => !showNav)
        
    

    return (
        <div className="w-screen h-[70px] x-10 fixed  z-50 bg-zinc-200 drop-shadow-lg ">
            <div className="px-6 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mr-4 sm:text-4xl" >BRAND</h1>
                    <ul className="hidden md:flex">
                        <li><Link to="Home" smooth={true} offset={""} > Home </Link> </li>
                        <li><Link to="About" smooth={true} offset={-200} > About </Link> </li>
                        <li><Link to="Support" smooth={true} offset={-50} > Support </Link> </li>
                        <li><Link to="Plateforms" smooth={true} offset={-80} > Plateforms </Link> </li>
                        <li><Link to="Pricing" smooth={true} offset={-70} > Pricing </Link> </li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="border-none  bg-transparent text-black mr-4"> Sign in </button>
                    <button className="px-8 py-2">Sign up</button>
                </div>
                <div className="md:hidden mr-8 " onClick={() => menuHandler()}>
                    {!showNav ? <MenuIcon  className="w-5" /> : <XIcon className="w-5" />}
                    
                </div>
            </div>
            
            <ul className={!showNav ? "hidden" : "absolute bg-zinc-200 w-full px-8  "}>
                <li className="border-b-2 border-zinc-300 w-full">
                    <Link onClick={() => menuHandler()} to="Home" smooth={true} offset={""} > Home </Link>
                </li>
                <li className="border-b-2 border-zinc-300 w-full">
                   <Link onClick={() => menuHandler()} to="About" smooth={true} offset={-200} > About </Link>
                </li>
                <li className="border-b-2 border-zinc-300 w-full">
                    <Link onClick={() => menuHandler()} to="Support" smooth={true} offset={-50} > Support </Link>
                </li>
                <li className="border-b-2 border-zinc-300 w-full">
                    <Link onClick={() => menuHandler()} to="Plateforms" smooth={true} offset={-80} > Plateforms </Link>
                </li>
                <li className="border-b-2 border-zinc-300 w-full">
                    <Link onClick={() => menuHandler()} to="Pricing" smooth={true} offset={-70} > Pricing </Link>
                </li>
                <div className="flex flex-col my-4">
                    <button className="bg-transparent text-indigo-500 py-2 px-8 my-4 ">Sign in</button>
                    <button className="py-2 px-8">Sign UP</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;

