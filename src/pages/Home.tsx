import { Button } from "../components/ui/button"
import ScrollDownIcon from '../components/ScrollDownIcon';
import { useAuth } from '../hooks/auth';
import { useNavigate } from "react-router-dom";

function Home() {
    const {isAuthenticated} = useAuth()
    const navigate = useNavigate()
    return (
        <div className="">
            <div className="h-screen">
                <div
                    style={{ backgroundImage: `url(/images/bg-image.png)` }}
                    className="rounded-[30px] bg-cover bg-center bg-no-repeat min-h-screen relative"
                >
                    <div className="absolute inset-0 bg-black opacity-30 rounded-[30px]"></div>
                    <div className="relative z-10 text w-3/4 p-16 py-32 flex flex-col gap-10">
                        <h1 className="text-8xl text-gray-100 font-cinageo_medium">Discover the most wild places</h1>
                        <h2 className="text-4xl text-white font-cinageo_light">Go camping under the night sky and discover new places</h2>
                        <Button className="w-52 p-7 text-xl bg-gray-100 hover:bg-black hover:text-white rounded-3xl text-black font-cinageo_medium"
                        onClick={() => { 
                            if(isAuthenticated) {
                                navigate('/bookings')
                            } else {
                                navigate('/auth/login')
                            }
                         }}
                        >
                            <a href="/bookings">
                                Book Now
                            </a>
                        </Button>
                    </div>
                    <ScrollDownIcon />
                </div>
            </div>
        </div>
    )
}

export default Home