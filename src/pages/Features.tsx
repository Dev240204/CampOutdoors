import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineLandscape } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GiSchoolBag } from "react-icons/gi";
function Features() {
    return (
        <div>
            <div className="h-full">
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col gap-8">
                        <h1 className='text-7xl font-cinageo_medium mx-auto'>Top values for you</h1>
                        <h2 className="text-4xl font-cinageo_light text-gray-500 mx-auto" >Try variety of benefits using our services</h2>
                    </div>
                    <div className="flex flex-row">
                        <div className="rounded-lg p-4 flex flex-col items-center text-center flex-1">
                            <div className="bg-gray-100 rounded-full p-3 mb-3">
                                <IoWalletOutline className="text-2xl text-gray-600" />
                            </div>
                            <h3 className=" font-cinageo_medium text-xl mb-2">Easy Booking</h3>
                            <p className=" font-cinageo_light text-sm text-gray-600">
                                Quick and easy booking for your new camping adventure
                            </p>
                        </div>
                        <div className="rounded-lg p-4 flex flex-col items-center text-center flex-1">
                            <div className="bg-gray-100 rounded-full p-3 mb-3">
                                <MdOutlineLandscape className="text-2xl text-gray-600" />
                            </div>
                            <h3 className=" font-cinageo_medium text-xl mb-2">Curated Locations</h3>
                            <p className=" font-cinageo_light text-sm text-gray-600">
                                Beautifully curated campsites, chosen with care for your ideal escape.
                            </p>
                        </div>
                        <div className="rounded-lg p-4 flex flex-col items-center text-center flex-1">
                            <div className="bg-gray-100 rounded-full p-3 mb-3">
                                <HiOutlineUserGroup className="text-2xl text-gray-600" />
                            </div>
                            <h3 className=" font-cinageo_medium text-xl mb-2">Best tour guide</h3>
                            <p className=" font-cinageo_light text-sm text-gray-600">
                                Our best tour guide will help you to explore the wild places
                            </p>
                        </div>
                        <div className="rounded-lg p-4 flex flex-col items-center text-center flex-1">
                            <div className="bg-gray-100 rounded-full p-3 mb-3">
                                <GiSchoolBag className="text-2xl text-gray-600" />
                            </div>
                            <h3 className=" font-cinageo_medium text-xl mb-2">Personalized Itinary</h3>
                            <p className=" font-cinageo_light text-sm text-gray-600">
                                Customized itineraries for your every camping adventurer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features