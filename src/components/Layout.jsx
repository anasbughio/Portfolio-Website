import React from 'react';
// import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="bg-[#0B0F17] min-h-screen select-none">
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
}