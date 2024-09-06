import logo from "/public/logo.png";
import { useState } from 'react';
import { IonIcon } from 'react-ion-icon';
import { closeOutline, menuOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';


export default function Navbar() {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "STUDENT INFO", link: "/" },
        { name: "ACADEMIC DETAILS", link: "/" },
        { name: "BLOG'S", link: "/" },
        { name: "CONTACT", link: "/" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-[#004e89] py-3 md:px-10 px-6'>
                {/* Logo Section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white'>
                    <span className='mr-3 pt-2'>
                        <img src={logo} alt="logo" className="h-16" />
                    </span>
                    Tezpur University
                </div>

                {/* Menu Icon for mobile view */}
                <div onClick={() => setOpen(!open)} className='text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden'>
                    <IonIcon icon={open ? closeOutline : menuOutline} className="text-white"/>
                </div>

                {/* Navigation Links */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#004e89] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                    {Links.map((link) => (
                        <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                            <Link to={link.link} className='text-white hover:text-white duration-500'>{link.name}</Link>
                        </li>
                    ))}
                    <li>
                        <Link to="/login" className="">
                            <Button>
                                Login
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

const Button = (props) => {
    return (
        <button className='bg-white text-[#004e89] cursor-pointer font-[Poppins] font-semibold py-2 px-6 rounded md:ml-8 hover:bg-[#adb5bd] duration-300'>
            {props.children}
        </button>
    );
};
