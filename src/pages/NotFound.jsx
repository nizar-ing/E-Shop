import React from 'react';
import {Link} from "react-router";

function NotFound() {
    return (
        <div className='flex flex-col flex-grow items-center justify-center p-8 text-center'>
            <h1 className='text-9xl font-bold text-gray-400 mb-8'>404</h1>
            <p className='text-2xl mb-4'>Oops! Page not found</p>
            <p className='text-gray-600 mb-8'>
                The page you are looking for does not exist or has been moved
            </p>
            <Link
                to='/'
                className='bg-sky-700 text-white px-6 py-3 rounded-lg hover:bg-sky-800 transition-colors duration-300'
            >
                Back to Home
            </Link>
        </div>
    );
}

export default NotFound;
