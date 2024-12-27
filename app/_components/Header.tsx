"use client";
import React, { useState } from 'react';

const Header: React.FC = () => {


    return (
        <header className="bg-[#FAFBFC] p-4 text-center flex justify-between items-center shadow-md md:ml-auto md:w-[calc(100%-25%)] lg:w-[calc(100%-20%)]">
            <h1 className="text-[#2B1F33] text-4xl font-bold">Task Management App</h1>
            <button
                className="block md:hidden text-[#2B1F33]"
                aria-label="Open Sidebar">
                ☰
            </button>
        </header>
    );
};

export default Header;
