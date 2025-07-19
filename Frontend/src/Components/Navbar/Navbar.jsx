import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Install with: npm install lucide-react

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    const NavItems = [
        { URL: "/voice", Name: "Voice" },
        { URL: "/messaging", Name: "Messaging" },
        { URL: "/enterprise", Name: "Enterprise" },
        { URL: "/contact", Name: "Contact Us" },
    ];

    return (
        <nav className={`w-full ${isHomePage ? 'text-white' : 'text-black'}`}>
            <div className="flex items-center justify-between px-4 md:px-16 py-4">

                {/* Logo */}
                <div className="w-36 ">
                    <NavLink to="/">
                        <img
                            src={isHomePage ? '/Images/Navbar/STR_WhiteVersion.png':"../../../Images/Home/STR Networks.png"}
                            alt="STR Networks Logo"
                            className="w-full h-auto"
                        />
                    </NavLink>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-8 items-center">
                    {NavItems.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.URL}
                                className={({ isActive }) =>
                                    `hover:text-hoverPrimary transition-all duration-300 hover:underline underline-offset-8 ${isActive ? 'text-hoverPrimary underline' : ''
                                    }`
                                }
                            >
                                {item.Name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Menu */}
                <div className="md:hidden relative">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu" className='mt-6'>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="relative z-20">
                    <div className="md:hidden absolute inset-x-4 top-20 mx-auto bg-accent backdrop-blur-md rounded-xl shadow-xl px-6 py-10 transition-all duration-300 ease-in-out w-[90%]">
                        {/* <div className="w-28 my-6">
                            <NavLink to="/" onClick={() => setIsOpen(false)}>
                                <img
                                    src="/Images/Home/STR Networks.png"
                                    alt="STR Networks Logo"
                                    className="w-full h-auto"
                                />
                            </NavLink>
                        </div> */}
                        <ul className="flex flex-col gap-4">
                            {NavItems.map((item, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={item.URL}
                                        className={({ isActive }) =>
                                            `block text-base font-medium text-gray-800 hover:text-hoverPrimary transition-colors duration-300 ${isActive ? 'text-primary font-semibold' : ''
                                            }`
                                        }
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.Name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
