import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button"
import { useAuth } from '../hooks/auth';
import { useLogout } from "../hooks/auth";


function Navbar() {
    const navitems = [
        {
            title: 'Our Tours',
            link: '/tours'
        },
        {
            title: 'About Us',
            link: '/about'
        },
        {
            title: 'Bookings',
            link: '/bookings'
        }
    ]
    const navigate = useNavigate()
    const HandleLogout = () => {
        navigate('/')
    }
    const isAuthenticated = useAuth()
    return (
        <div className="w-full h-14">
            <nav className="flex flex-row justify-between items-center font-cinageo_medium">
                <div className="flex-1">
                    <a href="/">
                        <img src="/images/logo.png" alt="Logo" className="h-14" />
                    </a>
                </div>
                <div className="flex flex-1 flex-row justify-center gap-12">
                    {navitems.map((item, index) => (
                        <div className="">
                            <a href={item.link} key={index}>{item.title}</a>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end flex-1">
                    {isAuthenticated && (
                        <Button className="hover:bg-gray-200 hover:text-black"onClick={HandleLogout}>
                                Logout
                        </Button>
                    )}
                    {!isAuthenticated && (
                        <Button className="hover:bg-gray-200 hover:text-black" >
                            <a href="/auth/login">
                                Login
                            </a>
                        </Button>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar