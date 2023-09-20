import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className=' flex justify-center p-5 space-x-10 bg-amber-600 font-semibold text-lg text-white'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/foods'>Foods</NavLink>
                    <NavLink to='/services'>Services</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;