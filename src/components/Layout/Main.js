import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <nav className='d-flex justify-content-center m-5'>
                <Link style={{ marginRight: "10px" }} className='text-decoration-none mr-8' to= '/login' >Login</Link>
                <Link className='text-decoration-none' to= '/register'>Register</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;