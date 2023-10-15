import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {BsWallet2} from 'react-icons/bs'
import {IoLogOutOutline} from "react-icons/io5";

function SideBar() {
    const {pathname} = useLocation()
    const navigate = useNavigate()

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
    }

    return (
        <div className='h-full w-[100%] bg-blue-950 flex flex-col justify-between py-10'>
            <div>
                <div className='w-[80%] mx-auto'>
                    <img src="/logo-ycw.svg" alt="logo"/>
                </div>
                <div className="flex flex-col mt-20">
                    <Link to='/'>
                        <div
                            className={`py-2 px-8 text-base-100 flex items-center gap-2 ${pathname === '/' && 'border-l-4 border-l-base-100'}`}>
                            <BsWallet2/> Резултаты
                        </div>
                    </Link>
                </div>
            </div>
            <div
                onClick={logout}
                className='py-2 px-8 text-base-100 flex items-center gap-2 cursor-pointer'>
                <IoLogOutOutline/> Выход
            </div>
        </div>
    );
}

export default SideBar;