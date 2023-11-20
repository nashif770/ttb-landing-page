import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="min-h-screen md:flex w-[1420px] mx-auto">
			<Outlet></Outlet>
		</div>
    );
};

export default Main;