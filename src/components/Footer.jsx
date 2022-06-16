import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="w-full bg-slate-900 ">
            <div className="w-full max-w-[90%]  mx-auto ">
                <div className="flex  flex-wrap text-white border-slate-300 border-b-2 ">
                    <div className="mt-10 mb-14 flex-1" >
                        <h5 className=" text-sm mb-4 uppercase font-semibold tracking-wide">Solutions</h5>
                        <ul>
                            <li className="px-1 py-0  pb-2 text-slate-300     font-thin" >Marketing</li>    
                            <li className="px-1 py-0  pb-2 text-slate-300     font-thin">Analytics</li>    
                            <li className="px-1 py-0  pb-2 text-slate-300     font-thin">Commerce</li>    
                            <li className="px-1 py-0  pb-2 text-slate-300     font-thin">Data</li>    
                            <li className="px-1 py-0  pb-2 text-slate-300     font-thin">Cloud</li>    
                        </ul>
                    </div>
                    <div className="mt-10 mb-14 flex-1 " >
                        <h5 className="text-sm mb-4 uppercase font-semibold tracking-wide">Support</h5>
                        <ul>
                            <li className="px-1 py-0  pb-2 text-slate-300     font-thin" >Marketing</li>    
                            <li className="px-1 py-0  pb-2 text-slate-300     font-thin">Analytics</li>    
                            <li className="px-1 py-0  pb-2 text-slate-300     font-thin">Commerce</li>    
                            <li className="px-1 py-0  pb-2 text-slate-300     font-thin">Data</li>    
                            <li className="px-1 py-0  pb-2 text-slate-300     font-thin">Cloud</li>    
                        </ul>
                    </div>
                    <div className="mt-10 mb-14 flex-1 " >
                        <h5 className="text-sm mb-4 uppercase font-semibold tracking-wide">Company</h5>
                        <ul>
                            <li className="px-1 py-0  pb-2 text-slate-300      font-thin" >Marketing</li>    
                            <li className="px-1 py-0  pb-2 text-slate-300      font-thin">Analytics</li>    
                            <li className="px-1 py-0  pb-2 text-slate-300      font-thin">Commerce</li>    
                            <li className="px-1 py-0  pb-2 text-slate-300      font-thin">Data</li>    
                            <li className="px-1 py-0  pb-2 text-slate-300      font-thin">Cloud</li>    
                        </ul>
                    </div>
                    <div className="mt-10 flex-2 pb-10" >
                        <h5 className="text-sm mb-4 uppercase font-semibold tracking-wide">Subscribe to our newslatter</h5>
                        <div>
                            <p className="my-4 text-slate-300">The Latesed news , articial and resources send to your inbox weekly</p>
                            <div className=" flex items-center justify-evenly">
                                <input className=" outline-none text-black py-2 w-full mr-8 rounded-lg px-2" type="text" placeholder="Enter your email" />
                                <button  className="px-4 py-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between py-2 flex-col  md:flex-row'>
                        <p className='text-slate-400 text-sm'>2022 Workflow , LLC All rights reserved</p>
                        <div>
                            <ul className='flex'>
                                <li>
                                    <FaFacebook className='animate-bounce text-gray-400 text-xl' />
                                </li>
                                <li>
                                    <FaGithub className='text-gray-400 text-xl ' />
                                </li>
                                <li>
                                    <FaInstagram className='text-gray-400 text-xl animate-bounce' />
                                </li>
                                <li>
                                    <FaTwitter className= '  text-gray-400 text-xl ' />
                                </li>
                                <li>
                                    <FaTwitch className='text-gray-400 text-xl animate-bounce ' />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;