
const Aboutus = () => {
    return (
        <div name="About" className="w-full my-32">
            <div className="max-w-[90%] m-auto ">
                <div className="text-center">
                    <h2 className="text-5xl font-bold">Trusted by developers across the world</h2>
                    <p className="text-3xl py-6 text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 text-center px-2 mt-8 ">
                    <div className="border bg-white  py-8 rounded-xl shadow-xl transition ease-in-out delay-150 hover:-translate-y-4 duration-300 ">
                        <p className="text-6xl font-bold text-indigo-600" >100%</p>
                        <p className="text-gray-400 mt-2">Completion</p>
                    </div>
                    <div className="border bg-white  py-8 rounded-xl shadow-xl transition ease-in-out delay-150 hover:-translate-y-4 duration-300">
                        <p className="text-6xl font-bold text-indigo-600">24/7</p>
                        <p className="text-gray-400 mt-2">Delivery</p>
                    </div>
                    <div className="border bg-white  py-8 rounded-xl shadow-xl transition ease-in-out delay-150 hover:-translate-y-4 duration-300">
                        <p className="text-6xl font-bold text-indigo-600">100K</p>
                        <p className="text-gray-400 mt-2">Transactions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus;