import React from 'react';

const NavItem: React.FC<{ item: string }> = ({ item }) => (
    <span
        className={`${item === "Tasks List"
            ? "text-[#7A63FF] font-semibold underline cursor-pointer"
            : "hover:text-[#374151] cursor-pointer"
            }`}
    >
        {item}
    </span>
);

export default NavItem;