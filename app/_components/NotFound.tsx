import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">
                Sorry, we couldn’t find the page you’re looking for.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
                Go back home
            </Link>
        </div>
    );
}
