
// Note: The h1 tag should be between 20 to 70 characters for optimal SEO. 
// This ensures that the title is descriptive enough for search engines and users, 
// but for design matters i din't make it 20:70 chars.

const Header: React.FC = () => {
    return (
        <header className="bg-indigo-600 p-4 text-center flex justify-between items-center shadow-lg text-white text-3xl font-semibold">
            <div className="flex items-center gap-2">
                <span className="text-xl md:text-4xl font-extrabold">🗂</span>
                <h1 className="text-xs md:text-base lg:text-xl ">Task Manager</h1>
            </div>
            <p className="text-xs md:text-base lg:text-xl text-indigo-100">Manage your tasks with ease and efficiency</p>
        </header>
    );
};

export default Header;
