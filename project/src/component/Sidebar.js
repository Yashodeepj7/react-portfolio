import React from 'react';
const Sidebar = ({ setActiveComponent,setShowLogout }) => {
    return(
        <>
        <div className="sidebar " >
            <div className="logo ">
            <h2 className='text-white justify-content-center mt-4 px-5'><span className='shadow d-inline ml-5'><svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><path fill="#FFD43B" d="M94.1 315.1c0 25.9-21.2 47.1-47.1 47.1S0 341 0 315.1c0-25.9 21.2-47.1 47.1-47.1h47.1v47.1zm23.7 0c0-25.9 21.2-47.1 47.1-47.1s47.1 21.2 47.1 47.1v117.8c0 25.9-21.2 47.1-47.1 47.1s-47.1-21.2-47.1-47.1V315.1zm47.1-189c-25.9 0-47.1-21.2-47.1-47.1S139 32 164.9 32s47.1 21.2 47.1 47.1v47.1H164.9zm0 23.7c25.9 0 47.1 21.2 47.1 47.1s-21.2 47.1-47.1 47.1H47.1C21.2 244 0 222.8 0 196.9s21.2-47.1 47.1-47.1H164.9zm189 47.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1s-21.2 47.1-47.1 47.1h-47.1V196.9zm-23.7 0c0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1V79.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1V196.9zM283.1 385.9c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1v-47.1h47.1zm0-23.7c-25.9 0-47.1-21.2-47.1-47.1 0-25.9 21.2-47.1 47.1-47.1h117.8c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1H283.1z"/></svg></span><span>Prince</span></h2>
            </div> 
            <ul className='mt-5 p-0 d-flex justify-content-end flex-column' type="none">
                <li className='py-md-4 py-2 px-md-4 d-flex justify-content-between'><a  className='text-white text-decoration-none fw-bold' onClick={() => setActiveComponent("Home")}>Home</a> <span ><box-icon name='home-alt'></box-icon></span></li>
                <li className='py-md-4 py-2 px-md-4 d-flex justify-content-between'><a href="#" className='text-white text-decoration-none fw-bold' onClick={() => setActiveComponent("Dashboard")}>Dashboard</a><span ><box-icon type='solid' name='tachometer'></box-icon></span></li>
                <li className='py-md-4 py-2 px-md-4 d-flex justify-content-between'><a href='#' className='text-white text-decoration-none fw-bold' onClick={() => setActiveComponent("Table")}>Table</a><span ><box-icon name='table' ></box-icon></span></li>
                <li className='py-md-4 py-2 px-md-4 d-flex justify-content-between'><a href="#" className='text-white text-decoration-none fw-bold' onClick={() => setActiveComponent("Contact")}>Contact</a><span ><box-icon name='contact' type='solid' ></box-icon></span></li>
                <li className='py-md-4 py-2 px-md-4 d-flex justify-content-between'><a href="#" className='text-white text-decoration-none fw-bold' onClick={() => setActiveComponent("Form")}>Projects</a><span ><box-icon type='logo' name='graphql'></box-icon></span></li>
                <li className='py-md-4 py-2 px-md-4 d-flex justify-content-between'><a href="#" className='text-white text-decoration-none fw-bold'  onClick={() => setShowLogout(true)}>Sign out</a><span ><box-icon name='log-out'></box-icon></span></li>
            </ul>
        </div>
        </>
    )
}

export default Sidebar;