import { PhoneIcon , ArrowSmRightIcon ,  } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

import supportImg from "../assets/support.jpg";


const Supports = () => {
    return (
        <div name="Support" className="w-full mt-24">
            <div className="w-full h-[700px] bg-gray-900/90 absolute">
                <img className="w-full h-full object-cover mix-blend-overlay" src={supportImg} alt="img" />
            </div>
            <div className="max-w-[90%] m-auto text-center text-white relative ">
                <div className="px-4 py-2 md:py-20">
                    <h2 className="pt-8 text-slate-300 uppercase text-center">SUPPORT</h2>
                    <h3 className="text-4xl font-bold py-6 ">Finding the right team</h3>
                    <p className="text-slate-300 text-2xl py-4 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <div className="grid  grid-cols-1 lg:grid-cols-3 relative gap-x-4 gap-y-16 px-4 py-10 sm:mt-4 text-black ">
                    <div className="bg-white rounded-xl shadow-2xl ">
                        <div className="p-8 ">
                             <PhoneIcon className="w-16 p-3 bg-indigo-600 rounded-lg text-white  mt-[-4rem]" />
                            <h3 className="font-bold text-2xl my-2">Sales</h3>
                            <p className="text-gray-600 text-xl text-left">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                        <div className="bg-slate-200 p-8 py-4">
                            <a className=" flex items-center font-bold text-indigo-600" href="/" >Contact-us <ArrowSmRightIcon className="w-6 mt-1 ml-2" /> </a>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-2xl ">
                        <div className="p-8 ">
                             <SupportIcon className="w-16 p-3 bg-indigo-600 rounded-lg text-white  mt-[-4rem]" />
                            <h3 className="font-bold text-2xl my-2">Technical Support</h3>
                            <p className="text-gray-600 text-xl text-left">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                        <div className="bg-slate-200 p-8 py-4">
                            <a className=" flex items-center font-bold text-indigo-600" href="/" >Contact-us <ArrowSmRightIcon className="w-6 mt-1 ml-2" /> </a>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-2xl ">
                        <div className="p-8 ">
                             <ChipIcon className="w-16 p-3 bg-indigo-600 rounded-lg text-white  mt-[-4rem]" />
                            <h3 className="font-bold text-2xl my-2">Sales</h3>
                            <p className="text-gray-600 text-xl text-left">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                        <div className="bg-slate-200 p-8 py-4">
                            <a className=" flex items-center font-bold text-indigo-600" href="/" >Contact-us <ArrowSmRightIcon className="w-6 mt-1 ml-2" /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Supports;