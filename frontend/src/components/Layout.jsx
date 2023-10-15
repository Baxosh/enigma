import React from 'react';
import SideBar from "./SideBar.jsx";

function Layout({children}) {
    return (
        <div className='flex'>
            <div className="h-screen w-[25%]">
                <SideBar/>
            </div>
            <div className="w-[75%]">
                {children}
            </div>
        </div>
    );
}

export default Layout;