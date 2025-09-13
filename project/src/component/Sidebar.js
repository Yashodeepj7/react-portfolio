import React from 'react';

const Sidebar = ({ setActiveComponent, setShowLogout }) => {
    return (
        <>
            <div className="sidebar">
                
                {/* Admin Logo & Name */}
                <div className="logo text-center mt-4">
                    <div 
                        className="shadow-lg rounded-circle d-flex align-items-center justify-content-center mx-auto" 
                        style={{ width: "65px", height: "65px", backgroundColor: "#FFD43B" }}
                    >
                        {/* Admin Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512">
                            <path fill="#1E1E2F" d="M256 0a256 256 0 1 0 256 256A256 256 0 0 0 256 0Zm0 128a80 80 0 1 1-80 80 80 80 0 0 1 80-80Zm0 320a191.6 191.6 0 0 1-128-48c0-35.3 64-54.7 128-54.7s128 19.4 128 54.7a191.6 191.6 0 0 1-128 48Z"/>
                        </svg>
                    </div>
                    <h2 className='text-white fw-bold mt-3'>Admin</h2>
                </div> 

                {/* Navigation */}
                <ul className='mt-5 p-0 d-flex justify-content-end flex-column' type="none">
                    {/* <li className='py-md-4 py-2 px-md-4 d-flex justify-content-between'>
                        <a className='text-white text-decoration-none fw-bold' onClick={() => setActiveComponent("Home")}>Home</a>
                        <span><box-icon name='home-alt'></box-icon></span>
                    </li> */}
                    <li className='py-md-4 py-2 px-md-4 d-flex justify-content-between'>
                        <a href="#" className='text-white text-decoration-none fw-bold' onClick={() => setActiveComponent("Dashboard")}>Dashboard</a>
                        <span><box-icon type='solid' name='tachometer'></box-icon></span>
                    </li>
                    <li className='py-md-4 py-2 px-md-4 d-flex justify-content-between'>
                        <a href='#' className='text-white text-decoration-none fw-bold' onClick={() => setActiveComponent("Table")}>Table</a>
                        <span><box-icon name='table'></box-icon></span>
                    </li>
                    <li className='py-md-4 py-2 px-md-4 d-flex justify-content-between'>
                        <a href="#" className='text-white text-decoration-none fw-bold' onClick={() => setActiveComponent("Contact")}>Contact</a>
                        <span><box-icon name='contact' type='solid'></box-icon></span>
                    </li>
                    <li className='py-md-4 py-2 px-md-4 d-flex justify-content-between'>
                        <a href="#" className='text-white text-decoration-none fw-bold' onClick={() => setActiveComponent("Form")}>Projects</a>
                        <span><box-icon type='logo' name='graphql'></box-icon></span>
                    </li>
                    <li className='py-md-4 py-2 px-md-4 d-flex justify-content-between'>
                        <a href="#" className='text-white text-decoration-none fw-bold' onClick={() => setShowLogout(true)}>Sign out</a>
                        <span><box-icon name='log-out'></box-icon></span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;
