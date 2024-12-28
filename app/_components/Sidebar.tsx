
import React from 'react';
import { sidebarItems } from '../_const/sidebarItems';

const Sidebar: React.FC = () => {
    const selectedItem = 2;
    return (
        <aside className="fixed top-0 left-0 h-full w-1/4 bg-white text-gray-800 pt-6 transform -translate-x-full md:translate-x-0 transition-transform duration-300 flex flex-col gap-8 shadow-lg">
            <div className="flex items-center justify-center pb-6">
                <p className="text-xl md:text-3xl font-semibold text-indigo-600">Trend FE Task App</p>
            </div>
            <nav>
                <ul className="px-6 text-lg flex flex-col gap-6">
                    {sidebarItems.map((item) => (
                        <li
                            key={item.id}
                            className={`py-3 px-4 rounded-lg cursor-pointer transition-colors duration-200 ${item.id === selectedItem
                                ? 'bg-indigo-100 text-indigo-600'
                                : 'hover:bg-indigo-100 hover:text-indigo-600'
                                }`}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
