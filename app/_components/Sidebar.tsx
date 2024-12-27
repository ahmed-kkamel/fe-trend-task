import React from 'react';

interface SidebarItem {
    id: number;
    label: string;
    link: string;
}

const sidebarItems: SidebarItem[] = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Tasks", link: "/tasks" },
    { id: 3, label: "Settings", link: "/settings" },
];

const Sidebar: React.FC = () => {
    return (
        <aside className="fixed top-0 left-0 h-full w-3/4 md:w-1/4 lg:w-1/5 bg-[#FFFFFF] text-[#2B1F33] pt-4 transform -translate-x-full md:translate-x-0 transition-transform duration-300  flex flex-col gap-12 shadow-md">
            <h2 className="text-base md:text-2xl font-medium md:font-bold pb-4 px-4 ">Task App</h2>
            <nav>
                <ul className="px-4 text-lg flex flex-col gap-4">
                    {sidebarItems.map((item) => (
                        <li
                            key={item.id}
                            className="hover:bg-[#F7F7F7] py-3 cursor-pointer"
                        >
                            <a href={item.link}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
