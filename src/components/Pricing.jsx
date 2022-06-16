
import { CheckIcon } from "@heroicons/react/outline";

const Pricing = () => {

    return (
        <div name="Pricing" className="w-full  mb-40 ">
            <div className='w-full h-[650px] bg-slate-900 absolute mix-blend-overlay'></div>
            <div className="max-w-[90%] mx-auto  ">
                <div className=" pt-14">
                    <h6 className="uppercase text-slate-300 text-center my-4">Pricing</h6>
                    <h2 className="text-center text-white text-5xl font-bold mb-8" >The Right Price For Your Research</h2>
                    <p className="text-gray-400 text-center max-w-[60%] mx-auto pb-4">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-14 mt-8">
                    <div className="bg-white rounded-2xl m-4 p-8 shadow-2xl relative md:max-w-[600px] mx-auto  ">
                            <p className="uppercase rounded-full bg-indigo-500 inline-block text-sm px-2 text-white mb-6">Free</p>
                            <h2 className="font-bold text-5xl pb-4">
                                $0
                                <span className="text-xl">/mo</span>
                            </h2>
                            <p className="text-slate-500">Lorem Ipsum has been the industry's standard dummy. </p>
                            <ul>
                                <li className="flex items-center pl-0 ">
                                    <CheckIcon className="w-6 mr-4 text-green-600" / >
                                    <span className="font-semibold">Dummy text of the printing</span>
                                </li>
                                <li className="flex items-center pl-0 ">
                                    <CheckIcon className="w-6 mr-4 text-green-600" / >
                                    <span className="font-semibold">Dummy text of the printing</span>
                                </li>
                                <li className="flex items-center pl-0 ">
                                    <CheckIcon className="w-6 mr-4 text-green-600" / >
                                    <span className="font-semibold">Dummy text of the printing</span>
                                 </li>
                                <li className="flex items-center pl-0 ">
                                    <CheckIcon className="w-6 mr-4 text-green-600" / >
                                    <span className="font-semibold">Dummy text of the printing</span>
                                </li>
                                <li className="flex items-center pl-0 ">
                                    <CheckIcon className="w-6 mr-4 text-green-600" / >
                                    <span className="font-semibold">Dummy text of the printing</span>
                                </li>
                            </ul>
                            <button className="w-full py-4 mt-4">Get Started</button>
                    </div>
                    <div className="bg-white rounded-2xl m-4 p-8 shadow-2xl relative md:max-w-[600px] mx-auto  ">
                            <p className="uppercase rounded-full bg-indigo-500 inline-block text-sm px-2 text-white mb-6">standard</p>
                            <h2 className="font-bold text-5xl pb-4">
                                $49
                                <span className="text-xl">/mo</span>
                            </h2>
                            <p className="text-slate-500">Lorem Ipsum has been the industry's standard dummy. </p>
                            <ul>
                                <li className="flex items-center pl-0 ">
                                    <CheckIcon className="w-6 mr-4 text-green-600" / >
                                    <span className="font-semibold">Dummy text of the printing</span>
                                </li>
                                <li className="flex items-center pl-0 ">
                                    <CheckIcon className="w-6 mr-4 text-green-600" / >
                                    <span className="font-semibold">Dummy text of the printing</span>
                                </li>
                                <li className="flex items-center pl-0 ">
                                    <CheckIcon className="w-6 mr-4 text-green-600" / >
                                    <span className="font-semibold">Dummy text of the printing</span>
                                 </li>
                                <li className="flex items-center pl-0 ">
                                    <CheckIcon className="w-6 mr-4 text-green-600" / >
                                    <span className="font-semibold">Dummy text of the printing</span>
                                </li>
                                <li className="flex items-center pl-0 ">
                                    <CheckIcon className="w-6 mr-4 text-green-600" / >
                                    <span className="font-semibold">Dummy text of the printing</span>
                                </li>
                            </ul>
                            <button className="w-full py-4 mt-4 bg-black">Get Started</button>
                    </div>
                   <div className="bg-white rounded-2xl m-4 p-8 shadow-2xl relative md:max-w-[600px] mx-auto  ">
                            <p className="uppercase rounded-full bg-indigo-500 inline-block text-sm px-2 text-white mb-6">Enterprise</p>
                            <h2 className="font-bold text-5xl pb-4">
                                $30
                                <span className="text-xl">/mo</span>
                            </h2>
                            <p className="text-slate-500">Lorem Ipsum has been the industry's standard dummy. </p>
                            <ul>
                                <li className="flex items-center pl-0 ">
                                    <CheckIcon className="w-6 mr-4 text-green-600" / >
                                    <span className="font-semibold">Dummy text of the printing</span>
                                </li>
                                <li className="flex items-center pl-0 ">
                                    <CheckIcon className="w-6 mr-4 text-green-600" / >
                                    <span className="font-semibold">Dummy text of the printing</span>
                                </li>
                                <li className="flex items-center pl-0 ">
                                    <CheckIcon className="w-6 mr-4 text-green-600" / >
                                    <span className="font-semibold">Dummy text of the printing</span>
                                 </li>
                                <li className="flex items-center pl-0 ">
                                    <CheckIcon className="w-6 mr-4 text-green-600" / >
                                    <span className="font-semibold">Dummy text of the printing</span>
                                </li>
                                <li className="flex items-center pl-0 ">
                                    <CheckIcon className="w-6 mr-4 text-green-600" / >
                                    <span className="font-semibold">Dummy text of the printing</span>
                                </li>
                            </ul>
                            <button className="w-full py-4 mt-4">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;