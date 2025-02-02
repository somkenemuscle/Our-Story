import Link from 'next/link'; // Import Link from Next.js
import { navigationOnLargeScreen, navigationOnMobile } from '@/constants/navigation';

const Navbar = () => {
    const date = new Date();
    const currentDate = date.toLocaleDateString("en-US", {
        year: "numeric", // e.g., 2025
        month: "long",   // e.g., January
        day: "numeric",  // e.g., 27
    });
    return (
        <div className="fixed z-50 top-6 inset-x-0 mx-auto w-fit">
            {/* ON LARGE SCREEN DEVICES */}
            <nav className="hidden md:block lg:block bg-neutral-950 rounded-full text-pink-50 font-sans text-sm pr-3 pl-7 py-2 navbar">
                <ul className="flex flex-row items-center gap-x-8 cursor-pointer">
                    {navigationOnLargeScreen.map((nav, index) => (
                        <Link key={index} href={nav.href} {...(nav.name === 'Gallery' && { target: "_blank", rel: "noopener noreferrer" })}>
                            <li className='hover:text-pink-300 transition duration-300 ease-in-out'>{nav.name}</li>
                        </Link>
                    ))}
                    <Link href='#'>
                        <li className="bg-neutral-800 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-neutral-900 border border-neutral-700">
                            <span className="animate-pulse-ring inline-block mr-2">💙</span> {currentDate}
                        </li>
                    </Link>
                </ul>
            </nav>

            {/* ON MOBILE DEVICES */}
            <nav className="md:hidden lg:hidden  bg-neutral-950 rounded-full text-pink-50 font-sans text-sm py-4 px-16 navbar nav-mobile">
                <ul className="flex flex-row items-center gap-x-8 cursor-pointer">
                    {navigationOnMobile.map((mobileNav, index) => (
                        <Link key={index} href={mobileNav.href} {...(mobileNav.name === 'Gallery' && { target: "_blank", rel: "noopener noreferrer" })}>
                            <li className='hover:text-pink-300 transition duration-300 ease-in-out'>{mobileNav.name}</li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
