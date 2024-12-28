import React from 'react';

const SearchInput: React.FC<{ value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({
    value,
    onChange
}) => (
    <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search tasks..."
        aria-label="Search tasks"
        className="py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-sm placeholder:lg:text-base"
    />
);

export default SearchInput;